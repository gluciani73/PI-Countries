const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM('Verano, Otoño, Invierno, Primavera'),
    },
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