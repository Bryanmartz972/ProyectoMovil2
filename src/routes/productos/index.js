const { Router } = require('express');
const controladorProducto = require('../../controllers/controladorProducto');
const controladorAutenticacion= require('../../controllers/autenticacion');
const {body, param} = require('express-validator');
const router = Router();
//router.get('/listar', ControladorClientes.listarTipos);
//router.post('/guardar', ControladorClientes.Guardar);

router.get('/listar', controladorAutenticacion.validarAutenticado,controladorProducto.listarProducto);

router.post('/guardar',
body('nombre_producto').isLength({min:3}).withMessage('La longitud minima del nombre es de 3 caracteres'),
body('cantidad_producto').isLength({min:1}).withMessage('La longitud minima de la cantidad es de 1 caracteres'),
body('precio_producto').isLength({min:1}).withMessage('La longitud minima del precio es de 1 caracteres'),
body('marca_producto').isLength({min:2}).withMessage('La longitud minima de la marca es de 2 caracteres'),
body('idcategorias').isInt().withMessage('El Id debe ser un numero entero'),
body('idtallas').isInt().withMessage('El Id debe ser un numero entero'),
body('costo').isLength({min:1}).withMessage('La longitud minima del costo es de 1 caracteres'),
controladorProducto.GuardarProducto
);

router.put('/modificar',
controladorAutenticacion.validarAutenticado,
param('idproductos').isEmpty().withMessage('No se permiten campos vacios')
.not().isInt().withMessage('El Id debe ser un numero entero'),
body('nombre_producto').isLength({min:3}).withMessage('La longitud minima del nombre es de 3 caracteres'),
body('cantidad_producto').isLength({min:1}).withMessage('La longitud minima de la cantidad es de 1 caracteres'),
body('precio_producto').isLength({min:1}).withMessage('La longitud minima del precio es de 1 caracteres'),
body('marca_producto').isLength({min:2}).withMessage('La longitud minima de la marca es de 2 caracteres'),
body('idcategorias').isEmpty().withMessage('No se permiten campos vacios').not().isInt().withMessage('El Id debe ser un numero entero'),
body('idtallas').isEmpty().withMessage('No se permiten campos vacios').not().isInt().withMessage('El Id debe ser un numero entero'),
body('costo').isLength({min:1}).withMessage('La longitud minima del costo es de 1 caracteres'),
controladorProducto.ModificarProducto
);

router.delete('/:id', 
param('idproductos').isEmpty().withMessage('No se permiten campos vacios').not().isInt().withMessage('El Id debe ser un numero entero'),
controladorAutenticacion.validarAutenticado, controladorProducto.EliminarProducto);

module.exports=router;