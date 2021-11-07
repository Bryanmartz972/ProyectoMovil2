const{Router} = require('express');
const router = Router();
const controladorPago = require('../../controllers/controladorPago');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/listar',controladorAutenticacion.validarAutenticado, controladorPago.listarPago);
router.post('/guardar',controladorAutenticacion.validarAutenticado, controladorPago.GuardarPago);
router.delete('/:idpagos',controladorAutenticacion.validarAutenticado, controladorPago.EliminarPago);
router.put('/modificar', controladorAutenticacion.validarAutenticado, controladorPago.ModificarPago);
module.exports = router;