const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  },
    {
      timestamps: false
      // timestamps: true,
      // createdAt: false,
      // updatedAt: 'actualizado'
    });
};

// El modelo de la base de datos deberá tener las siguientes entidades(Aquellas propiedades marcadas con asterísco deben ser obligatorias):
//
// País con las siguientes propiedades:
// ID(Código de 3 letras) *
//   Nombre *
//   Imagen de la bandera *
//   Continente *
//   Capital *
//   Subregión
//   Área
//   Población