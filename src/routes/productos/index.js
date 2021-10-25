const{Router} = require('express');
const router = Router();
const controladorProducto = require('../../controllers/controladorProducto');

router.get('/',controladorProducto.listarProducto);
router.post('/',controladorProducto.GuardarProducto);
router.delete('/:id',controladorProducto.EliminarParamsProducto);
router.delete('/',controladorProducto.EliminarQueryProducto);
router.put('/',controladorProducto.ActualizarProducto);
module.exports = router;