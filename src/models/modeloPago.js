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
            validate: {
                is:{
                    args: [/^[0-9]+$/],
                    msg: "ID del tipo invalido."
                }
            },
        },

        descripcion_pago: {
            type: sequelize.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Ingrese el pago'
                }
            }
        },
    },
    {
        tableName: "pagos",
        timestamps: false,
    }
);
module.exports = Pago;
