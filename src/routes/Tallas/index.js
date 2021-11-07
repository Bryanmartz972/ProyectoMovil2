const{Router} = require('express');
const router = Router();
const controladorTalla = require('../../controllers/controladorTalla');
const controladorAutenticacion= require('../../controllers/autenticacion');
const {body, param} = require('express-validator');

router.get('/',controladorAutenticacion.validarAutenticado, controladorTalla.ListarTalla);

router.post('/',
body('descripcion_talla').isLength({min:3}).withMessage('La longitud minima de la categoria es de 3 caracteres'),
controladorAutenticacion.validarAutenticado, controladorTalla.GuardarTalla);

router.delete('/:idtallas',controladorAutenticacion.validarAutenticado, controladorTalla.EliminarParamsTalla);

router.put('/',
param('idtallas').isEmpty().withMessage('No se permiten campos vacios')
.not().isInt().withMessage('El Id debe ser un numero entero'),
body('descripcion_talla').isLength({min:3}).withMessage('La longitud minima de la categoria es de 3 caracteres'),
controladorAutenticacion.validarAutenticado, controladorTalla.ActualizarTalla);
module.exports = router;