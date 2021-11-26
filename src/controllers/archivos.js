const fs = require('fs');
const msj = require('../componentes/mensaje');
const path = require('path');
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
        const buscarimagen = fs.existsSync(path.join(__dirname, '../public/img/' +buscarProducto.imagen));
        if(!buscarimagen){
            console.log('La imagen no existe');
        }
        else{
            try{
                fs.unlinkSync(path.join(__dirname, '../public/img/' + buscarProducto.imagen));
                console.log("Imagen eliminada");
            }catch(error){
                console.log(error);
                console.log("No se elimino la imagen");
            }
        }
        buscarProducto.imagen=filename;
        await buscarProducto.save()
        .then((data)=>{
            //console.log(data);
            msj("Archivo almacenado", [], res);
        })
        .catch((error)=>{
            console.log(error);
            msj("Error al guardar la imagen", 200, [], res);

        });
    }
};

