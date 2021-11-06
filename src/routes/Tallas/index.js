const{Router} = require('express');
const router = Router();
const controladorTalla = require('../../controllers/controladorTalla');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorTalla.ListarTalla);
router.post('/',controladorAutenticacion.validarAutenticado, controladorTalla.GuardarTalla);
router.delete('/:idtallas',controladorAutenticacion.validarAutenticado, controladorTalla.EliminarParamsTalla);
router.put('/',controladorAutenticacion.validarAutenticado, controladorTalla.ActualizarTalla);
module.exports = router;