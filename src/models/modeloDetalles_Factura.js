const sequelize = require('sequelize');
const db = require('../configs/db');
const Detalles_Factura = db.define(
    "detalles_factura",
    {
        iddetalles_Factura: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cantidad: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        subtotal: {
            type: sequelize.DOUBLE,
            allowNull: false,
        },
        impuesto: {
            type: sequelize.DOUBLE,
            allowNull: false,
        },
        total: {
            type: sequelize.DOUBLE,
            allowNull: false,
        },
        idfacturas: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "detalles_factura",
        timestamps: false,
    }
);
module.exports = Detalles_Factura;