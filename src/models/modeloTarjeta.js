const sequelize = require('sequelize');
const db = require('../configs/db');
const Tarjeta = db.define(
    "tarjetas",
    {
        idtarejtas: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        num_tarjetas: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        fecha_vencimiento: {
            type: sequelize.DATE,
            allowNull: false,
        },
        VIN: {
            type: sequelize.STRING(4),
            allowNull: false,
        },
        tipo_tarjeta: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        idusuario: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "tarjetas",
        timestamps: false,
    }
);
module.exports = Tarjeta;
