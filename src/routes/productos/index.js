const { Router } = require('express');
const router = Router();
const controladorProducto = require('../../controllers/controladorProducto');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/listar', controladorAutenticacion.validarAutenticado,controladorProducto.listarProducto);
router.post('/guardar', controladorAutenticacion.validarAutenticado,controladorProducto.GuardarProducto);
router.put('/modificar',controladorAutenticacion.validarAutenticado,controladorProducto.ModificarProducto);
router.delete('/:idproductos',controladorAutenticacion.validarAutenticado, controladorProducto.EliminarProducto);

module.exports=router;