const{Router} = require('express');
const router = Router();
const controladorPago = require('../../controllers/controladorPago');

router.get('/',controladorPago.listarPago);
router.post('/',controladorPago.GuardarPago);
router.delete('/:id',controladorPago.EliminarParamsPago);
router.delete('/',controladorPago.EliminarQueryPago);
router.put('/',controladorPago.ActualizarPago);
module.exports = router;