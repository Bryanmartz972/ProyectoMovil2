const{Router} = require('express');
const router = Router();
const controladorDetalles_Factura = require('../../controllers/controladorDetalles_Factura');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorDetalles_Factura.ListarDetalles_Factura);
router.post('/',controladorAutenticacion.validarAutenticado, controladorDetalles_Factura.GuardarDetalles_Factura);
router.delete('/:iddetalles_Factura',controladorAutenticacion.validarAutenticado, controladorDetalles_Factura.EliminarParamsDetalles_Factura);
router.delete('/',controladorAutenticacion.validarAutenticado, controladorDetalles_Factura.EliminarQueryDetalles_Factura);
router.put('/',controladorAutenticacion.validarAutenticado, controladorDetalles_Factura.ActualizarDetalles_Factura);
module.exports = router;