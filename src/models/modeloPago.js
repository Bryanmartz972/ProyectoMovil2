const sequelize = require('sequelize');
const db = require('../configs/db');
const Pago = db.define(
    "pagos",
    {
        idpagos: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        descripcion_pago: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
    },
    {
        tableName: "pagos",
        timestamps: false,
    }
);
module.exports = Pago;
