const ModeloCliente = require('../models/modeloUsuario');
const {validationResult} = require('express-validator');
const moment = require('moment');
const msj = require('../componentes/mensaje');
const passport = require('../configs/passport');
const { Op } = require("sequelize");
exports.validarAutenticado = passport.validarAutenticado;
exports.incioSesion = async (req, res, next)=> {
    const validacion=validationResult(req);
    if (!validacion.isEmpty)
    {
        msj("Los datos ingresados no son validos", 200, validacion.array(), res);
    }
    else{
        const {usuario, contrasena} = req.body;
        const BuscarCliente = await ModeloCliente.findOne({
            where:{
                [Op.and]:[{
                    [Op.or]:[
                        {correo: usuario},
                        {login: usuario}
                    ],
                    activo: true,
                }],
            }
        });
        if(!BuscarCliente)
        {
            msj("El cliente no existe o se encuentra inactivo", 200,[], res);
        }
        else
        {
            if(!BuscarCliente.verificarContrasena(contrasena, BuscarCliente.contrasena))
            {
                msj("El cliente no existe o contrasena invalida", 200, [], res);
            }
            else
            {
                const cli = {
                    correo: BuscarCliente.correo,
                    login: BuscarCliente.login,
                    nombre: BuscarCliente.nombre,
                    apellido: BuscarCliente.apellido,
                    telefono: BuscarCliente.telefono,
                    imagen: BuscarCliente.imagen
                };
                const token = passport.getToken({id: BuscarCliente.id});
                const data = {
                    token: token,
                    cliente: cli
                };
                msj("Bienvenido, " + cli.nombre + " " + cli.apellido, 200, data, res);
            }
        }
    }
};
exports.ValidarToken = async (req, res)=> {
    const { data }= req.body;
    //console.log(req);
    msj("Token invalido", 200, data, res);
};
exports.enviarToken = async (req, res)=> {
    const { data }= req.body;
    res.status(200).json(data);
};