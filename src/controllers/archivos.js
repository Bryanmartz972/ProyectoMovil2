const msj = require('../componentes/mensaje');
const Producto = require('../models/modeloProducto');
exports.Recibir = async(req, res) =>
{
    const {filename} = req.file;
    const idproductos = req.user;
    console.log(req.file);
    console.log(idproductos);
    var buscarProducto = await Producto.finOne({
        where:{
            idproductos:idproductos
        }
    });
    if(!buscarProducto){
        msj("El producto no existe", 200, [], res);
    }
    else{
        buscarProducto.imagen_producto=filename;
        await buscarProducto.save()
        .then((data)=>{
            console.log(data);
            msj("Archivo almacenado", [], res);
        })
        .catch((error)=>{
            console.log(error);
            msj("Error al guardar la imagen", 200, [], res);

        });
    }
};

