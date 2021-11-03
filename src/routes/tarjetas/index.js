const{Router} = require('express');
const router = Router();
const controladorTarjeta = require('../../controllers/controladorTarjeta');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorTarjeta.listarTarjeta);
router.post('/',controladorAutenticacion.validarAutenticado, controladorTarjeta.GuardarTarjeta);
router.delete('/:id',controladorAutenticacion.validarAutenticado, controladorTarjeta.EliminarParamsTarjeta);
router.delete('/',controladorAutenticacion.validarAutenticado, controladorTarjeta.EliminarQueryTarjeta);
router.put('/',controladorAutenticacion.validarAutenticado, controladorTarjeta.ActualizarTarjeta);
module.exports = router;