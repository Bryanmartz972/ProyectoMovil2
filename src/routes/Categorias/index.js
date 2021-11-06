const{Router} = require('express');
const router = Router();
const controladorCategoria = require('../../controllers/controladorCategoria');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorCategoria.listarCategoria);
router.post('/',controladorAutenticacion.validarAutenticado, controladorCategoria.GuardarCategoria);
router.delete('/:idcategorias',controladorAutenticacion.validarAutenticado, controladorCategoria.EliminarParamsCategoria);
router.put('/',controladorAutenticacion.validarAutenticado, controladorCategoria.ModificarCategoria);
module.exports = router;