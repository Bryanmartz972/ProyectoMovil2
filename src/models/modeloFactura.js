const sequelize = require('sequelize');
const db = require('../configs/db');
const Factura = db.define(
    "facturas",
    {
        idfacturas: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        fecha_factura: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        idusuario: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "facturas",
        timestamps: false,
    }
);
module.exports = Factura;
