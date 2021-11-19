const { Router } = require('express');
const {body} = require('express-validator');
const controladorAutenticacion = require('../../controllers/autenticacion');
const router = Router();
router.post('/iniciosesion/',
    body('usuario')
    .isEmpty().withMessage('Debe enviar los datos del usuario correo o login'),
    body('contrasena')
    .isLength({min:6}).withMessage('La longitud minima de la contraseña es de 6 caracteres'),
    controladorAutenticacion.incioSesion,
);
router.get('/error/', controladorAutenticacion.ValidarToken);

router.post('/recuperacion/',
    body('correo')
    .isEmpty().withMessage('Debe enviar los datos del usuario correo'),
    controladorAutenticacion.recuperarContrasena,
);
module.exports=router;