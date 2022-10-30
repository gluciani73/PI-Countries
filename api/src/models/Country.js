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
    currency: {
      type: DataTypes.STRING,
    },
    currency_name: {
      type: DataTypes.STRING,
    },
    currency_symbol: {
      type: DataTypes.STRING,
    },
    languages: {
      type: DataTypes.STRING,
    },
    googleMaps: {
      type: DataTypes.STRING,
    },
  },
    {
      timestamps: false
      // timestamps: true,
      // createdAt: false,
      // updatedAt: 'actualizado'
    });
};

