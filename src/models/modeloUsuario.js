const sequelize = require('sequelize');
const db = require('../configs/db');
const bcrypt = require('bcrypt');

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
            unique: 
            {
                msg: 'El usuario debe ser unico'
            },
            
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
            type: sequelize.STRING(255),
            allowNull: false,
            validate:
            {
                notEmpty:
                {
                   msg: 'Ingrese la contrasena'
                }
            },
        },
        direccion_usuario: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
    },
    {
        tableName: "usuario",
        timestamps: false,
        hooks : {
            beforeCreate(Usuario) {
              const hash = bcrypt.hashSync(Usuario.contrasena, 10);
              Usuario.contrasena = hash;
            },
            beforeUpdate(Usuario){
              const hash = bcrypt.hashSync(Usuario.contrasena, 10);
              Usuario.contrasena = hash;
            }
          },  
    },

   
);
Usuario.prototype.verificarContrasena = (con, com)=>{
    return bcrypt.compareSync(con, com);
}

module.exports = Usuario;
