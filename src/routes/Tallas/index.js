const{Router} = require('express');
const router = Router();
const controladorTalla = require('../../controllers/controladorTalla');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorTalla.listarTalla);
router.post('/',controladorAutenticacion.validarAutenticado, controladorTalla.GuardarTalla);
router.delete('/:id',controladorAutenticacion.validarAutenticado, controladorTalla.EliminarParamsTalla);
router.delete('/',controladorAutenticacion.validarAutenticado, controladorTalla.EliminarQueryTalla);
router.put('/',controladorAutenticacion.validarAutenticado, controladorTalla.ActualizarTalla);
module.exports = router;