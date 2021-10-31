const Tallas = require('../models/modeloTalla');;
exports.listarTalla = async (req, res) => {
    const tallas = await Tallas.findAll();
    console.log(tallas);
    res.json(tallas);
};

exports.GuardarTalla = async(req, res) => {
    const { descripcion_talla } = req.body;
    if (!descripcion_talla )
    {
        res.send("Debe enviar los datos completos");
    }
    else{
        var nuevaTalla = await Tallas.create({
            descripcion_talla: descripcion_talla
        
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};


exports.EliminarParamsTalla = async (req, res) => {
    const {idtallas} =  req.params;
    if(!idtallas)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const nuevaTalla = await Tallas.findOne({
            where:{
                idtallas: idtallas,
            } 
         });
         if(!nuevaTalla){
             res.send("El producto no existe");
         }
         else{
             await Tallas.destroy({
                where:{
                    idtallas:idtallas,
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

exports.EliminarQueryTalla = async (req, res) => {
    const { idtallas } =  req.query;
    if(!idtallas)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const nuevaTalla = await Tallas.findOne({
            where:{
                idtallas: idtallas,
            } 
         });
         if(!nuevaTalla){
             res.send("El usuario no existe");
         }
         else{
             await Tallas.destroy({
                where:{
                    idtallas:idtallas,
                }
             }).then((data) => {
                 console.log(data);
                 res.send("El registro ha sido eliminado");
             }).catch((error)=>{
                 console.log(error);
                 res.send("El registro no fue eleminado, porque hay un error en el servidor")
             });
         }
    }
};

exports.ActualizarTalla = async (req, res) => {
    const {idtallas} = req.query;
    const {descripcion_talla}=req.body;

    if (!idtallas)
    {
        res.send("Debe enviar el id del usuario");
    }
    else{
        var nuevaTalla = await Tallas.findOne({
            where: {
                idtallas: idtallas,
            }
        });
        if (!nuevaTalla){
            res.send("El usuario no existe");
        }
        else{

            if (!idtallas || !descripcion_talla )
            {
                res.send("Debe enviar los datos completos");
            }
            else{
                nuevaTalla.descripcion_talla=descripcion_talla;
                
                await nuevaTalla.save();
                console.log(nuevaTalla);
                res.send("Registro actualizado");
            }
        }
    }
};
