const{Router} = require('express');
const router = Router();
const controladorPago = require('../../controllers/controladorPago');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorPago.listarPago);
router.post('/',controladorAutenticacion.validarAutenticado, controladorPago.GuardarPago);
router.delete('/:id',controladorAutenticacion.validarAutenticado, controladorPago.EliminarParamsPago);
router.delete('/',controladorAutenticacion.validarAutenticado, controladorPago.EliminarQueryPago);
router.put('/', controladorAutenticacion.validarAutenticado, controladorPago.ActualizarPago);
module.exports = router;