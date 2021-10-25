const sequelize = require('sequelize');
const db = require('../configs/db');
const Tallas = db.define
(
    "tallas",
    {
        idtallas: 
        {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        descripcion_talla: 
        {
            type: sequelize.STRING(45),
            allowNull: false,
        },
    },
        {
            tableName: "tallas",
            timestamps: false,
        }
    
);
    module.exports = Tallas;