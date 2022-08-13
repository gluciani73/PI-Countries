const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Sequelize = require('sequelize')
const router = Router();
const axios = require('axios');
// Traigo los modelos de db
// const { Activity } = require('')
const { Activity, Country, country_activity } = require('../db')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Primero vamos a llenar la DB con info de la api externa restcountries 

const arrInfoCountries = async () => {
    const arrCountriesApi = await axios.get('https://restcountries.com/v3/all');
    const arrCountriesDB = await arrCountriesApi.data.map(c => {
        let country = {
            id: c.cca3,
            name: c.translations.spa.common,
            flag: c.flags[1],
            continent: c.continents.toString(),
            capital: c.capital.toString(),
            subregion: c.subregion,
            area: c.area,
            population: c.population
        }
        return country
    });
    return arrCountriesDB
}

// GET / countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí(Debe retonar sólo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.

router.get('/')


module.exports = router;
