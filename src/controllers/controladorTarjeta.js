const Tarjeta = require('../models/modeloTarjeta');
exports.listarTarjeta = async (req, res) => {
    const tarjeta = await Tarjeta.findAll();
    console.log(tarjeta);
    res.json(tarjeta);
};

exports.GuardarTarjeta = async (req, res) => {
    const { num_tarjeta, fecha_vencimiento, VIN, tipo_tarjeta, idusuario } = req.body;
    if (!num_tarjeta || !fecha_vencimiento || !VIN || !tipo_tarjeta || !idusuario) {
        res.send("Debe enviar los datos completos");
    }
    else {
        const nuevoProducto = await Producto.create({
            num_tarjeta: num_tarjeta,
            fecha_vencimiento: fecha_vencimiento,
            VIN: VIN,
            tipo_tarjeta: tipo_tarjeta,
            idusuario: idusuario
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error) => {
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};


exports.EliminarParamsTarjeta = async (req, res) => {
    const { idtarjetas } = req.params;
    if (!idtarjetas) {
        res.send("Debe enviar el id de tarjeta ")
    }
    else {
        const buscarTarjeta = await Tarjeta.findOne({
            where: {
                idtarjetas: idtarjetas,
            }
        });
        if (!buscarTarjeta) {
            res.send("La Tarjeta no existe");
        }
        else {
            await Tarjeta.destroy({
                where: {
                    idtarjetas: idtarjetas,
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

exports.EliminarQueryTarjeta = async (req, res) => {
    const { idtarjetas } = req.query;
    if (!idtarjetas) {
        res.send("Debe enviar el id de tarjeta ")
    }
    else {
        const buscarTarjeta = await Tarjeta.findOne({
            where: {
                idtarjetas: idtarjetas,
            }
        });
        if (!buscarTarjeta) {
            res.send("La Tarjeta no existe");
        }
        else {
            await Tarjeta.destroy({
                where: {
                    idtarjetas: idtarjetas,
                }
            }).then((data) => {
                console.log(data);
                res.send("El registro ha sido eliminado");
            }).catch((error) => {
                console.log(error);
                res.send("El registro no fue eleminado, porque hay un error en el servidor")
            });
        }
    }
};

exports.ActualizarTarjeta = async (req, res) => {
    const { idtarjetas } = req.query;
    const { num_tarjeta, fecha_vencimiento, VIN, tipo_tarjeta, idusuario } = req.body;
    if (!idtarjetas) {
        res.send("Debe enviar el id de tarjeta");
    }
    else {
        var buscarTarjeta = await Tarjeta.findOne({
            where: {
                idtarjetas: idtarjetas,
            }
        });
        if (!buscarTarjeta) {
            res.send("La tarjeta no existe");
        }
        else {

            if (!idtarjetas || !num_tarjeta || !fecha_vencimiento || !VIN || !tipo_tarjeta || !idusuario) {
                res.send("Debe enviar los datos completos");
            }
            else {
                buscarTarjeta.num_tarjeta = num_tarjeta;
                buscarTarjeta.fecha_vencimiento = fecha_vencimiento;
                buscarTarjeta.VIN = VIN;
                buscarTarjeta.tipo_tarjeta = tipo_tarjeta;
                buscarTarjeta.idusuario = idusuario;
                await buscarTarjeta.save();
                console.log(buscarTarjeta);
                res.send("Registro actualizado");
            }
        }
    }
};
