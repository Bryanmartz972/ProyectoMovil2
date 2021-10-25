const sequelize = require('sequelize');
const db = require('../configs/db');
const Usuario = db.define(
    "usuario",
    {
        idusuario: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        apellido: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        nombre_usuario: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        correo: {
            type: sequelize.STRING(255),
            allowNull: false,
        },
        telefono: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        contrasena: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        direccion_usuario: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
    },
    {
        tableName: "usuario",
        timestamps: false,
    }
);
module.exports = Usuario;
