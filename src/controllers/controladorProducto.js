const Producto = require('../models/modeloProducto');
const {validationResult} = require('express-validator');
const moment =require('moment');
const msj = require('../componentes/mensaje');
const passport = require('../configs/passport');
const { Op } = require("sequelize");
const { normalizeUnits } = require('moment');
exports.validarAutenticado = passport.validarAutenticado;

exports.listarProducto = async (req, res) => {
    try
    {
        const producto = await Producto.findAll({
             attributes: [
                 'idproductos', 'nombre_producto', 'cantidad_producto', 'precio_producto', 'marca_producto', 'idcategoria' , 'idtallas' , 'costo'
                ]
        });
        msj("Peticion procesada correctamente", 200, producto, res);
    }
    catch{
        msj("Ocurrio un error en el servidor", 500, [], res);
    }
};


exports.GuardarProducto = async (req, res)=> {
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        console.log( req.body + validacion.array());
        msj("Los datos ingresados no son validos", 200, validacion.array(),res);
    }
    else
    {
        const { nombre_producto, cantidad_producto, precio_producto, marca_producto, idcategorias, idtallas, costo} = req.body;
        console.log(req.body);
        if(nombre_producto && cantidad_producto && precio_producto && marca_producto && idcategorias && idtallas && costo)
        {
            const buscarProducto = await Producto.findOne({
                where:{
                    [Op.or]:{
                        idproductos:idproductos,
                        nombre_producto: nombre_producto
                    }
                }
            });
            console.log(buscarProducto);
            if(!buscarProducto){
                await Producto.create({
                    nombre_producto: nombre_producto,
                    cantidad_producto: cantidad_producto,
                    precio_producto: precio_producto,
                    marca_producto: marca_producto,
                    idcategorias: idcategorias,
                    idtallas: idtallas,
                    costo: costo,
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

exports.EliminarProducto = async (req, res)=> {
    const { idproductos } = req.params;
    var mensajes = {
        mensaje: "Datos procesados correctamente",
        data: []
    };
    if(idproductos)
    {
        const buscarProducto = await Producto.findOne({
            where: {
                idproductos: idproductos,
            }
        });
        console.log(buscarProducto);
        if (buscarProducto)
        {
            await Producto.destroy({
                where:{
                    idproductos: idproductos,
                }
            }).then((result)=>{
                console.log(result);
                mensajes.mensaje="Registros eliminados";
                mensajes.data=result
                res.status(200).json(mensajes);
            }).catch((error)=>{
                mensajes.mensaje="Error al actualizar los datos";
                res.status(200).json(mensajes);
            });
            //res.send("Empleado eliminado");
        }
        else
        {
            mensajes.mensaje="No existe el id de producto no existe";
            res.status(200).json(mensajes);
        }

    }
    else
    {
        mensajes.mensaje="Faltan algunos datos necesarios para el procesamiento de la petición"
        res.status(200).json(mensajes);
    }
};


exports.Modificar = async (req, res)=> {
    //const { id } = req.query;
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        console.log(validacion.array());
        msj("Los datos ingresados no son validos", 200, validacion.array(),res);
    }
    else
    {
        const { id } = req.query;
        const { nombre, apellido, telefono} = req.body;
        const BuscarCliente =await ModeloCliente.findOne({
            where:{
                id: id
            }
        });
        console.log(BuscarCliente);
        if(!BuscarCliente){
            msj("Datos procesados correctamente", 200, [], res);
        }
        else{
            BuscarCliente.nombre=nombre;
            BuscarCliente.apellido=apellido;
            BuscarCliente.telefono=telefono;
            msj("Datos procesados correctamente", 200, mensaje, res);
        }
    }
};

exports.ModificarProducto = async (req, res)=> {
    //const { id } = req.query;
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        console.log(validacion.array());
        msj("Los datos ingresados no son validos", 200, validacion.array(),res);
    }
    else
    {
        const { idproductos } = req.query;
        const { nombre_producto, cantidad_producto, precio_producto, marca_producto, idcategorias, idtallas, costo} = req.body;
        const buscarProducto =await Producto.findOne({
            where:{
                idproductos: idproductos
            }
        });
        console.log(buscarProducto);
        if(!buscarProducto){
            msj("Datos procesados correctamente", 200, [], res);
        }
        else{
                buscarProducto.nombre_producto=nombre_producto;
                buscarProducto.cantidad_producto=cantidad_producto;
                buscarProducto.precio_producto=precio_producto;
                buscarProducto.marca_producto=marca_producto;
                buscarProducto.idcategorias=idcategorias;
                buscarProducto.idtallas=idtallas;
                buscarProducto.costo=costo;
            msj("Datos procesados correctamente", 200, mensaje, res);
        }
    }
};

