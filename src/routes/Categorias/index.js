const{Router} = require('express');
const router = Router();
const controladorCategoria = require('../../controllers/controladorCategoria');
const controladorAutenticacion= require('../../controllers/autenticacion');
const {body, param} = require('express-validator');

router.get('/',controladorAutenticacion.validarAutenticado, controladorCategoria.ListarCategoria);

router.post('/',
param('idcategorias').isEmpty().withMessage('No se permite campo vacio').not().isInt().withMessage("El ID debe ser un numero entero"),
body('descripcion').isLength({min:3}).withMessage('La longitud minima de la categoria es de 3 caracteres'),
controladorAutenticacion.validarAutenticado, controladorCategoria.GuardarCategoria);

router.delete('/:idcategorias',controladorAutenticacion.validarAutenticado, controladorCategoria.EliminarParamsCategoria);
router.put('/',controladorAutenticacion.validarAutenticado, controladorCategoria.ModificarCategoria);
module.exports = router;