const{Router} = require('express');
const router = Router();
const controladorDetalles_Factura = require('../../controllers/controladorDetalles_Factura');

router.get('/',controladorDetalles_Factura.ListarDetalles_Factura);
router.post('/',controladorDetalles_Factura.GuardarDetalles_Factura);
router.delete('/:id',controladorDetalles_Factura.EliminarParamsDetalles_Factura);
router.delete('/',controladorDetalles_Factura.EliminarQueryDetalles_Factura);
router.put('/',controladorDetalles_Factura.ActualizarDetalles_Factura);
module.exports = router;