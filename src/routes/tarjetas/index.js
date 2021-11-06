const{Router} = require('express');
const router = Router();
const controladorTarjeta = require('../../controllers/controladorTarjeta');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorTarjeta.ListarTarjeta);
router.post('/',controladorAutenticacion.validarAutenticado, controladorTarjeta.GuardarTarjeta);
router.delete('/:idtarjetas',controladorAutenticacion.validarAutenticado, controladorTarjeta.EliminarParamsTarjeta);
router.put('/',controladorAutenticacion.validarAutenticado, controladorTarjeta.ActualizarTarjeta);
module.exports = router;