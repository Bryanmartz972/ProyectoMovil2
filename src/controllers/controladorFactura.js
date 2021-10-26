const Factura = require('../models/modeloFactura');

exports.ListarFactura = async (req, res) => {
    const fac = await Factura.findAll();
    console.log(fac);
    res.json(fac);
};

exports.GuardarFactura = async(req, res) => {
    const { fecha_factura, idusuario, idpagos } = req.body;
    if (!fecha_factura || !idusuario || !idpagos)
    {
        res.send("Debe enviar los datos completos");
    }
    else{
        const nuevaFactura = await Factura.create({
            fecha_factura: fecha_factura,
            idusuario: idusuario,
            idpagos: idpagos
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};


exports.EliminarParamsFactura = async (req, res) => {
    const { idfacturas } =  req.params;
    if(!idfacturas)
    {
        res.send("Debe enviar el id de la factura ")
    }
    else{
         const buscarFactura = await Factura.findOne({
            where:{
                idfacturas: idfacturas,
            } 
         });
         if(!buscarFactura){
             res.send("La factura no existe");
         }
         else{
             await Factura.destroy({
                where:{
                    idfacturas:idfacturas,
                }
             }).then((data) => {
                 console.log(data);
                 res.send("El registro ha sido eliminado");
             }).catch((error)=>{
                 console.log(error);
                 res.send("El registro no fue eliminado, porque hay un error en el servidor");
             });
         }
    }
};

exports.EliminarQueryFactura = async (req, res) => {
    const { idfacturas } =  req.query;
    if(!idfacturas)
    {
        res.send("Debe enviar el id de la factura ")
    }
    else{
         const buscarFactura = await Factura.findOne({
            where:{
                idfacturas: idfacturas,
            } 
         });
         if(!buscarFactura){
             res.send("La factura no existe");
         }
         else{
             await Factura.destroy({
                where:{
                    idfacturas:idfacturas,
                }
             }).then((data) => {
                 console.log(data);
                 res.send("El registro ha sido eliminado");
             }).catch((error)=>{
                 console.log(error);
                 res.send("El registro no fue eliminado, porque hay un error en el servidor");
             });
         }
    }
};

exports.ActualizarFactura = async (req, res) => {
    const {idfacturas} = req.query;
    const { fecha_factura, idusuario, idpagos }=req.body;

    if (!idfacturas)
    {
        res.send("Debe enviar el id de la factura");
    }
    else{
        var buscarFactura = await Factura.findOne({
            where: {
                idfacturas: idfacturas,
            }
        });
        if (!buscarFactura){
            res.send("La factura no existe");
        }
        else{

            if (!fecha_factura || !idusuario || !idpagos)
            {
                res.send("Debe enviar los datos completos");
            }
            else{
                buscarFactura.fecha_factura=fecha_factura;
                buscarFactura.idusuario=idusuario;
                buscarFactura.idpagos=idpagos;
                await buscarFactura.save();
                console.log(buscarFactura);
                res.send("Registro actualizado");
            }
        }
    }
};
