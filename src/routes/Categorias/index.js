const{Router} = require('express');
const router = Router();
const controladorCategoria = require('../../controllers/controladorCategoria');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorCategoria.listarCategoria);
router.post('/',controladorAutenticacion.validarAutenticado, controladorCategoria.GuardarCategoria);
router.delete('/:id',controladorAutenticacion.validarAutenticado, controladorCategoria.EliminarParamsCategoria);
router.delete('/',controladorAutenticacion.validarAutenticado, controladorCategoria.EliminarQueryCategoria);
router.put('/',controladorAutenticacion.validarAutenticado, controladorCategoria.ActualizarCategorias);
module.exports = router;