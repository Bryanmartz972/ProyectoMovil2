const Detalles_Factura = require('../models/modeloDetalles_Factura');
exports.ListarDetalles_Factura = async (req, res) => {
    const detfac = await Detalles_Factura.findAll();
    console.log(detfac);
    res.json(detfac);
};

exports.GuardarDetalles_Factura = async(req, res) => {
    const { cantidad, subtotal, impuesto, total, idfacturas } = req.body;
    if (!cantidad || !subtotal || !impuesto || !total || !idfacturas)
    {
        res.send("Debe enviar los datos completos");
    }
    else{
        const nuevoDetalles_Factura = await Detalles_Factura.create({
            cantidad: cantidad,
            subtotal: subtotal,
            impuesto: impuesto,
            total: total,
            idfacturas: idfacturas
        }).then((data) => {
            console.log(data);
            res.send("Registro almacenado correctamente");
        }).catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};

exports.EliminarParamsDetalles_Factura = async (req, res) => {
    const { iddetalles_Factura } =  req.params;
    if(!iddetalles_Factura)
    {
        res.send("Debe enviar el id del del detalle de factura")
    }
    else{
         const buscarDetalles_Factura = await Detalles_Factura.findOne({
            where:{
                iddetalles_Factura: iddetalles_Factura,
            } 
         });
         if(!buscarDetalles_Factura){
             res.send("El detalle de factura no existe");
         }
         else{
             await Detalles_Factura.destroy({
                where:{
                    iddetalles_Factura:iddetalles_Factura,
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

exports.EliminarQueryDetalles_Factura = async (req, res) => {
    const { iddetalles_Factura } =  req.query;
    if(!iddetalles_Factura)
    {
        res.send("Debe enviar el id del detalle de la factura ")
    }
    else{
         const buscarDetalles_Factura = await Detalles_Factura.findOne({
            where:{
                iddetalles_Factura: iddetalles_Factura,
            } 
         });
         if(!buscarDetalles_Factura){
             res.send("El detalle de la factura no existe");
         }
         else{
             await Detalles_Factura.destroy({
                where:{
                    iddetalles_Factura:iddetalles_Factura,
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

exports.ActualizarDetalles_Factura = async (req, res) => {
    const {iddetalles_Factura} = req.query;
    const { cantidad, subtotal, impuesto, total, idfacturas }=req.body;

    if (!iddetalles_Factura)
    {
        res.send("Debe enviar el id de la factura");
    }
    else{
        var buscarDetalles_Factura = await Detalles_Factura.findOne({
            where: {
                iddetalles_Factura: iddetalles_Factura,
            }
        });
        if (!buscarDetalles_Factura){
            res.send("El detalle de factura no existe");
        }
        else{

            if (!cantidad || !subtotal || !impuesto || !total || !idfacturas)
            {
                res.send("Debe enviar los datos completos");
            }
            else{
                buscarDetalles_Factura.cantidad=cantidad;
                buscarDetalles_Factura.subtotal=subtotal;
                buscarDetalles_Factura.impuesto=impuesto;
                buscarDetalles_Factura.total=total;
                buscarDetalles_Factura.idfacturas=idfacturas;
                await buscarDetalles_Factura.save();
                console.log(buscarDetalles_Factura);
                res.send("Registro actualizado");
            }
        }
    }
};
