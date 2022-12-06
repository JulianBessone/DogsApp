const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('temperament', {
        name: {
            type: DataTypes.STRING,
            isAlpha: true,
            allowNull: false,
            unique: true,
        }
    }) 
}