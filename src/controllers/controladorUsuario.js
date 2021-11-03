const Usuario = require('../models/modeloUsuario');
exports.listarUsuarios = async (req, res) => {
    const usu = await Usuario.findAll();
    console.log(usu);
    res.json(usu);
};

exports.Guardar = async(req, res) => {
    const { nombre_completo, nombre_usuario, correo, telefono, contrasena_encriptada, direccion_usuario } = req.body;
    if (!nombre_completo || !nombre_usuario || !correo || !telefono || !contrasena_encriptada || !direccion_usuario)
    {
        res.send("Debe enviar los datos completos");
    }
    else{
        const nuevoUsuario = await Usuario.create({
            nombre_completo: nombre_completo,
            nombre_usuario: nombre_usuario,
            correo: correo,
            telefono: telefono,
            contrasena_encriptada: contrasena_encriptada,
            direccion_usuario: direccion_usuario
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};


exports.EliminarParams = async (req, res) => {
    const { idusuario } =  req.params;
    if(!idusuario)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const buscarUsuario = await Usuario.findOne({
            where:{
                idusuario: idusuario,
            } 
         });
         if(!buscarUsuario){
             res.send("El usuario no existe");
         }
         else{
             await Usuario.destroy({
                where:{
                    idusuario:idusuario,
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

exports.EliminarQuery = async (req, res) => {
    const { idusuario } =  req.query;
    if(!idusuario)
    {
        res.send("Debe enviar el id del usuario ")
    }
    else{
         const buscarUsuario = await Usuario.findOne({
            where:{
                idusuario: idusuario,
            } 
         });
         if(!buscarUsuario){
             res.send("El usuario no existe");
         }
         else{
             await Usuario.destroy({
                where:{
                    idusuario:idusuario,
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

exports.ActualizarQuery = async (req, res) => {
    const {idusuario} = req.query;
    const { nombre_completo, nombre_usuario, correo, telefono, contrasena_encriptada, direccion_usuario }=req.body;

    if (!idusuario)
    {
        res.send("Debe enviar el id del usuario");
    }
    else{
        var buscarUsuario = await Usuario.findOne({
            where: {
                idusuario: idusuario,
            }
        });
        if (!buscarUsuario){
            res.send("El usuario no existe");
        }
        else{

            if (!nombre_completo || !nombre_usuario || !correo || !telefono || !contrasena_encriptada || !direccion_usuario)
            {
                res.send("Debe enviar los datos completos");
            }
            else{
                buscarUsuario.nombre_completo=nombre_completo;
                buscarUsuario.nombre_usuario=nombre_usuario;
                buscarUsuario.correo=correo;
                buscarUsuario.telefono=telefono;
                buscarUsuario.contrasena_encriptada=contrasena_encriptada;
                buscarUsuario.direccion_usuario=direccion_usuario;
                await buscarUsuario.save();
                console.log(buscarUsuario);
                res.send("Registro actualizado");
            }
        }
    }
};
