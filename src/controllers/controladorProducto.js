const Producto = require('../models/modeloProducto');;
exports.listarProducto = async (req, res) => {
    const producto = await Producto.findAll();
    console.log(producto);
    res.json(producto);
};

exports.GuardarProducto = async(req, res) => {
    const { idproducto, nombre_producto, cantidad_producto, precio_producto, marca_producto, idcategorias, idtallas, costo } = req.body;
    if (!idproducto || !nombre_producto || !cantidad_producto || !precio_producto || !marca_producto || !idcategorias || !idtallas || !costo)
    {
        res.send("Debe enviar los datos completos");
    }
    else{
        const nuevoProducto = await Producto.create({
            idproducto: idproducto,
            nombre_producto: nombre_producto,
            cantidad_producto: cantidad_producto,
            precio_producto: precio_producto,
            marca_producto: marca_producto,
            idcategorias: idcategorias,
            idtallas: idtallas,
            costo: costo
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};


exports.EliminarParamsProducto = async (req, res) => {
    const { idproducto } =  req.params;
    if(!idproducto)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const buscarProducto = await Producto.findOne({
            where:{
                idproducto: idproducto,
            } 
         });
         if(!buscarProducto){
             res.send("El producto no existe");
         }
         else{
             await Producto.destroy({
                where:{
                    idproducto:idproducto,
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

exports.EliminarQueryProducto = async (req, res) => {
    const { idproducto } =  req.query;
    if(!idproducto)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const buscarProducto = await Producto.findOne({
            where:{
                idproducto: idproducto,
            } 
         });
         if(!buscarProducto){
             res.send("El usuario no existe");
         }
         else{
             await Producto.destroy({
                where:{
                    idproducto:idproducto,
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

exports.ActualizarProducto = async (req, res) => {
    const {idproducto} = req.query;
    const { nombre_producto, cantidad_producto, precio_producto, marca_producto, idcategorias, idtallas, costo  }=req.body;

    if (!idproducto)
    {
        res.send("Debe enviar el id del usuario");
    }
    else{
        var buscarProducto = await Producto.findOne({
            where: {
                idusuario: idusuario,
            }
        });
        if (!buscarProducto){
            res.send("El usuario no existe");
        }
        else{

            if (!idproducto || !nombre_producto || !cantidad_producto || !precio_producto || !marca_producto || !idcategorias || !idtallas || !costo)
            {
                res.send("Debe enviar los datos completos");
            }
            else{
                buscarProducto.nombre_producto=nombre_producto;
                buscarProducto.cantidad_producto=cantidad_producto;
                buscarProducto.precio_producto=precio_producto;
                buscarProducto.marca_producto=marca_producto;
                buscarProducto.idcategorias=idcategorias;
                buscarProducto.idtallas=idtallas;
                buscarProducto.costo=costo;
                await buscarProducto.save();
                console.log(buscarProducto);
                res.send("Registro actualizado");
            }
        }
    }
};
