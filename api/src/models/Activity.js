const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // allowNull: false, no hace falta xq hay PK
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
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