const{Router} = require('express');
const router = Router();
const controladorCategoria = require('../../controllers/controladorCategoria');

router.get('/',controladorCategoria.listarCategoria);
router.post('/',controladorCategoria.GuardarCategoria);
router.delete('/:id',controladorCategoria.EliminarParamsCategoria);
router.delete('/',controladorCategoria.EliminarQueryCategoria);
router.put('/',controladorCategoria.ActualizarCategorias);
module.exports = router;