const Pago = require('../models/modeloPago');

const {validationResult} = require('express-validator');
const moment =require('moment');
const msj = require('../componentes/mensaje');
const passport = require('../configs/passport');
const { Op } = require("sequelize");
const { normalizeUnits } = require('moment');
const mensaje = require('../componentes/mensaje');
exports.validarAutenticado = passport.validarAutenticado;


exports.listarPago = async (req, res) => {
    try
    {
        const pago = await Pago.findAll();
        msj("Peticion procesada correctamente", 200, pago, res);
    }
    catch{
        msj("Ocurrio un error en el servidor", 500, [], res);
    }
};

exports.buscarPago = async(req,res) => {
    console.log(req.params);
    const {idpagos}=req.params;
    var mensaje ="";
    const pago = await Pago.findByPk(idpagos);
    console.log(pago);
    res.json(pago);
}


exports.GuardarPago = async (req, res) => {
    const { descripcion_pago } = req.body;
    if (!descripcion_pago) {
        res.send("Debe enviar los datos completos");
    }
    else {
        const nuevoPago = await Pago.create({
            descripcion_pago: descripcion_pago
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error) => {
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};

exports.GuardarPago = async (req, res)=> {
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        console.log( req.body + validacion.array());
        msj("Los datos ingresados no son validos", 200, validacion.array(),res);
    }
    else
    {
        const { descripcion_pago } = req.body;
        console.log(req.body);
        if(descripcion_pago)
        {
            const buscarPago = await Pago.findOne({
                where:{
                    [Op.or]:{
                        descripcion_pago: descripcion_pago
                    }
                }
            });
            console.log(buscarPago);
            if(!buscarPago){
                await Pago.create({
                    descripcion_pago: descripcion_pago,
                }).then((data)=>{
                   msj("Datos procesados correctamente", 200, data, res);
                }).catch((error)=>{
                    msj("Datos procesados incorrectamente", 200, error, res);
                });
            }
            else{
                const mensaje={
                    msj:"El pago ya existe",
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

exports.EliminarParamsPago = async (req, res) => {
    const { idpagos } = req.params;
    if (!idpagos) {
        res.send("Debe enviar el id de pago ")
    }
    else {
        const buscarPago = await Pago.findOne({
            where: {
                idpagos: idpagos,
            }
        });
        if (!buscarPago) {
            res.send("El pago no existe");
        }
        else {
            await Pago.destroy({
                where: {
                    idpagos: idpagos,
                }
            }).then((data) => {
                console.log(data);
                res.send("El registro ha sido eliminado");
            }).catch((error) => {
                console.log(error);
                res.send("El registro no fue eleminado,porque hay un error en el servidor")
            });
        }
    }
};

exports.EliminarPago = async (req, res) => {
    const { idpagos  } =  req.params;
    if(!idpagos )
    {
        res.send("Debe enviar el id del pago ")
    }
    else{
         const buscarPago = await Pago.findOne({
            where:{
                idpagos : idpagos ,
            } 
         });
         if(!buscarPago){
             res.send("El pago no existe");
         }
         else{
             await Pago.destroy({
                where:{
                    idpagos :idpagos ,
                }
             }).then((data) => {
                 console.log(data);
                 res.send("El registro ha sido eliminado");
             }).catch((error)=>{
                 console.log(error);
                 res.send("El registro no fue eleminado,porque hay un error en el servidor")
             });
         }
    }
};




exports.ModificarPago = async (req, res)=> {
    //const { id } = req.query;
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        console.log(validacion.array());
        msj("Los datos ingresados no son validos", 200, validacion.array(),res);
    }
    else
    {
        const { idpagos } = req.query;
        const { descripcion_pago } = req.body;
        const buscarPago =await Pago.findOne({
            where:{
                idpagos: idpagos
            }
        });
        console.log(buscarPago);
        if(!buscarPago){
            msj("Datos procesados incorrectamente", 200, [], res);
        } 
        else{
                buscarPago.descripcion_pago=descripcion_pago;
                await buscarPago.save().then((data)=>{
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
