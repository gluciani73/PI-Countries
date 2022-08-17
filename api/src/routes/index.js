const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Sequelize, Op } = require('sequelize')
const router = Router();
const axios = require('axios');
// Traigo los modelos de db
// const { Activity } = require('')
const { Activity, Country, country_activity } = require('../db')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Primero vamos a llenar la DB con info de la api externa restcountries 

const infoCountries = async () => {
    console.log('Se solicita Info a restcountries')
    const CountriesApi = await axios.get('https://restcountries.com/v3/all');
    const arrCountriesDB = await CountriesApi.data.map(c => {
        let country = {
            id: c.cca3,
            name: c.name.common, // en ingles, c.translations.spa.common nombres en español, 
            flag: c.flags[1],
            continent: c.continents[0],
            capital: !c.capital ? '' : c.capital.join(),
            subregion: c.subregion,
            area: c.area,
            population: c.population
        }
        return country
    });
    console.log('Fin de info rescountries');
    console.log('Ejemplo: ', arrCountriesDB[57]);
    return arrCountriesDB
}
// Chequeo si esta completa la DB y sino la comleto:

const dbComplete = async () => {
    //consulta a la DB
    console.log('Inicia consulta a DB')
    let countries = await Country.findAll();
    console.log('Fin consulta a DB')

    //si la DB esta vacia cargo los datos
    if (countries.length === 0) {
        // solicitud a restcountries
        const arrCountries = await infoCountries();
        console.log(' en /countries InfoCountries ejemplo 1: ', arrCountries[0])

        // Creating in bulk, creo los datos en masa.
        //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk
        console.log(' Inicia carga de DB con bulkCreate')
        await Country.bulkCreate(arrCountries);
        console.log('Fin carga de DB con bulkCreate')
    }
};

// --------------- GET /countries AND /contries?name="..." ---------------------
// GET / countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí(Debe retonar sólo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
//
// GET / countries ? name = "..." :
// Obtener los países que coincidan con el nombre pasado como query parameter(No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
router.get('/countries', async (req, res) => {
    const { name } = req.query;
    try {
        await dbComplete();
        // si viene un "name" por query
        if (name) {
            console.log('Respuesta query con name');
            let result = await Country.findAll(
                {
                    where: {
                        name: {
                            [Op.iLike]: `%${name}%`,
                            //ver https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
                        }
                    }
                }
            );
            if (!result.length) {
                return res
                    .status(200)
                    .send("un mensaje adecuado: 'No se encuentran paises para la busqueda'")
            }
            return res.status(200).json(result)
        }

        //  actualizo el array con la consulta a la DB ya completa
        console.log('Inicia consulta a DB completa')
        countries = await Country.findAll();
        console.log('Fin consulta a DB completa')
        res.status(200).send(countries)

    } catch (error) {
        console.log(error);
    }
})

// ---------------------- GET /countries/id ---------------------------
// GET / countries / { idPais }:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

router.get('/countries/:id', async (req, res) => {
    const idPais = req.params.id.toUpperCase();
    // const { name, flag, continent, capital, subregion, area, population } = req.query;
    try {
        await dbComplete();
        // si viene un idPais por params
        if (idPais) {
            console.log('Respuesta params con idPais');
            let result = await Country.findByPk(idPais, {
                include: {
                    model: Activity
                }
            });
            if (!result) {
                return res
                    .status(404)
                    .send("un mensaje adecuado: 'No se encuentran paises para ese idPais'")
            }
            return res.status(200).json(result)
        }
    } catch (error) {
        console.log(error)
    }
});
// ---------------------- GET /activites ---------------------------
router.get('/activities', async (req, res) => {
    try {
        console.log('Respuesta activities');
        let result = await Activity.findAll();
        if (!result.length) {
            return res
                .status(200)
                .send("un mensaje adecuado: 'No se encuentran actividades'")
        }
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
});

// ---------------------- POST /activites ---------------------------
router.post('/activities', async (req, res) => {
    try {

        console.log('-------POST /activities -------------- ')
        console.log('Req.body trae esto: ', req.body)
        const { name, difficulty, duration, season, countries } = req.body;
        await dbComplete();
        console.log('Posteo activities');
        if (!name) {
            return res
                .status(400)
                .send("La actividad debe tener nombre")
        }
        let newActivity = {         // creo nuevo objetos con datos de la actividad pasada x body
            name,
            difficulty,
            duration,
            season
        }
        // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate
        const [activity, created] = await Activity.findOrCreate({       // busco si existe, sino la creo 
            where: newActivity
        });
        console.log(created ? 'Se creo la actividad' : 'La actividad ya existe');

        //https://sequelize.org/docs/v6/core-concepts/assocs/#foobelongstomanybar--through-baz-
        const selectedCountries = [];        // en desarrollo
        const notFound = [];                // en desarrollo
        countries.forEach(async (c) => {
            const country = await Country.findOne({ where: { name: c } }); // para cada pais pasado lo busco
            if (country) { await activity.addCountry(country) };            // y le agrego la actividad pasada
        });
        let msg = `Se creo la actividad ${activity.name}.`
        return res
            .status(201)
            .send(msg)

    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
