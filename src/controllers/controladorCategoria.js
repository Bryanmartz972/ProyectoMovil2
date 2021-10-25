const Categorias = require('../models/modeloCategorias');;
exports.listarCategoria = async (req, res) => {
    const categorias = await Categorias.findAll();
    console.log(categorias);
    res.json(categorias);
};

exports.GuardarCategoria = async(req, res) => {
    const { idcategorias, descripcion } = req.body;
    if (!idcategorias || !descripcion )
    {
        res.send("Debe enviar los datos completos");
    }
    else{
        const nuevaCategoria = await Categorias.create({
            idcategorias: idcategorias,
            descripcion: descripcion
        
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};


exports.EliminarParamsCategoria = async (req, res) => {
    const { idcategorias } =  req.params;
    if(!idcategorias)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const nuevaCategoria = await Categorias.findOne({
            where:{
                idcategorias: idcategorias,
            } 
         });
         if(!nuevaCategoria){
             res.send("El producto no existe");
         }
         else{
             await Categorias.destroy({
                where:{
                    idcategorias:idcategorias,
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

exports.EliminarQueryCategoria = async (req, res) => {
    const { idcategorias } =  req.query;
    if(!idcategorias)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const nuevaCategoria = await Categorias.findOne({
            where:{
                idcategorias: idcategorias,
            } 
         });
         if(!nuevaCategoria){
             res.send("El usuario no existe");
         }
         else{
             await Categorias.destroy({
                where:{
                    idcategorias:idcategorias,
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

exports.ActualizarCategorias = async (req, res) => {
    const {idcategorias} = req.query;
    const {descripcion}=req.body;

    if (!idcategorias)
    {
        res.send("Debe enviar el id del usuario");
    }
    else{
        var nuevaCategoria = await Categorias.findOne({
            where: {
                idcategorias: idcategorias,
            }
        });
        if (!nuevaCategoria){
            res.send("El usuario no existe");
        }
        else{

            if (!idcategorias || !descripcion )
            {
                res.send("Debe enviar los datos completos");
            }
            else{
                nuevaCategoria.descripcion=descripcion;
                
                await nuevaCategoria.save();
                console.log(nuevaCategoria);
                res.send("Registro actualizado");
            }
        }
    }
};
