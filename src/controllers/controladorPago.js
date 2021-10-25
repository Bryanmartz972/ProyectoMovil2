const Pago = require('../models/modeloPago');
const Tarjeta = require('../models/modeloPago');
exports.listarPago = async (req, res) => {
    const pago = await Pago.findAll();
    console.log(pago);
    res.json(pago);
};

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

exports.EliminarQueryPago = async (req, res) => {
    const { idpagos } = req.query;
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
                res.send("El registro no fue eleminado, porque hay un error en el servidor")
            });
        }
    }
};

exports.ActualizarPago = async (req, res) => {
    const { idpagos } = req.query;
    const { descripcion_pago } = req.body;
    if (!idpagos) {
        res.send("Debe enviar el id de pago");
    }
    else {
        var buscarPago = await Pago.findOne({
            where: {
                idpagos: idpagos,
            }
        });
        if (!buscarPago) {
            res.send("El pago no existe");
        }
        else {

            if (!idpagos || !descripcion_pago) {
                res.send("Debe enviar los datos completos");
            }
            else {
                buscarPago.descripcion_pago = descripcion_pago;
                await buscarPago.save();
                console.log(buscarPago);
                res.send("Registro actualizado");
            }
        }
    }
};
