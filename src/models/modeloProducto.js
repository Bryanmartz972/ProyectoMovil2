const sequelize = require('sequelize');
const db = require('../configs/db');
const Producto = db.define(
    "productos",
    {
        idproducto: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre_producto: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        cantidad_producto: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        precio_producto: {
            type: sequelize.DOUBLE,
            allowNull: false,
        },
        marca_producto: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        idcategorias: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        idtallas: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        costo: {
            type: sequelize.DOUBLE,
            allowNull: false,
        },
    },
    {
        tableName: "productos",
        timestamps: false,
    }
);
module.exports = Producto;
