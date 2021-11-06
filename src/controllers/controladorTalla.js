const Talla = require('../models/modeloTalla');
const {validationResult} = require('express-validator');
const moment =require('moment');
const msj = require('../componentes/mensaje');
const passport = require('../configs/passport');
const { Op } = require("sequelize");
const { normalizeUnits } = require('moment');
const mensaje = require('../componentes/mensaje');
exports.validarAutenticado = passport.validarAutenticado;

exports.ListarTalla = async (req, res) => {
    try
    {
        const tall = await Talla.findAll();
        msj("Peticion procesada correctamente", 200, talla, res);
    }
    catch{
        msj("Ocurrio un error en el servidor", 500, [], res);
    }
};

exports.buscarTalla = async(req,res) => {
    console.log(req.params);
    const {idtallas}=req.params;
    var mensaje ="";
    const talla = await Talla.findByPk(idtallas);
    console.log(talla);
    res.json(talla);
}

exports.GuardarTalla = async (req, res)=> {
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        console.log( req.body + validacion.array());
        msj("Los datos ingresados no son validos", 200, validacion.array(),res);
    }
    else
    {
        const {descripcion_talla} = req.body;
        console.log(req.body);
        if(descripcion_talla)
        {
            const buscarTalla = await Talla.findOne({
                where:{
                    [Op.or]:{
                        descripcion_talla: descripcion_talla
                    }
                }
            });
            console.log(buscarTalla);
            if(!buscarTalla){
                await Talla.create({
                descripcion_talla: descripcion_talla
                }).then((data)=>{
                   msj("Datos procesados correctamente", 200, data, res);
                }).catch((error)=>{
                    msj("Datos procesados correctamente", 200, error, res);
                });
            }
            else{
                const mensaje={
                    msj:"El producto ya existe",
                };
                msj("Datos procesados correctamente", 200, mensaje, res);
            }

            
        }
        else
        {
            msj("Faltan algunos datos necesarios para el procesamiento de la petición", 200, [], res);
        }
    }
};

exports.EliminarParamsTalla = async (req, res) => {
    const { idtallas } =  req.params;
    if(!idtallas)
    {
        res.send("Debe enviar el id de la talla ")
    }
    else{
         const buscarTalla = await Talla.findOne({
            where:{
                descripcion_talla: descripcion_talla,
            } 
         });
         if(!buscarTalla){
             res.send("La talla no existe");
         }
         else{
             await Talla.destroy({
                where:{
                    idtallas:idtallas,
                }
             }).then((data) => {
                 console.log(data);
                 res.send("El registro ha sido eliminado");
             }).catch((error)=>{
                 console.log(error);
                 res.send("El registro no fue eliminado, porque hay un error en el servidor");
             });
         }
    }
};

exports.ActualizarTalla = async (req, res)=> {
    //const { id } = req.query;
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        console.log(validacion.array());
        msj("Los datos ingresados no son validos", 200, validacion.array(),res);
    }
    else
    {
        const { idtallas } = req.query;
        const { descripcion_talla} = req.body;
        const buscarTalla =await Talla.findOne({
            where:{
                idtallas: idtallas
            }
        });
        console.log(buscarTalla);
        if(!buscarTalla){
            msj("Datos procesados incorrectamente", 200, [], res);
        }
        else{
            buscarTalla.descripcion_talla=descripcion_talla;
    
                await buscarTalla.save().then((data)=>{
                    console.log(data);
                    msj("Datos procesados correctamente", 200, data, res);
                })
                .catch((error)=>
                {
                    console.log(error);
                    msj("Error al actualizar el registro",200, error, res);
                });
            
        }
    }
};
