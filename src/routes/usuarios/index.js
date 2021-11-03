const{Router} = require('express');
const router = Router();
const controladorUsuario = require('../../controllers/controladorUsuario');
const controladorAutenticacion= require('../../controllers/autenticacion');


router.get('/',controladorAutenticacion.validarAutenticado ,controladorUsuario.listarUsuarios);
router.post('/',controladorUsuario.Guardar);
router.delete('/:idusuario',controladorAutenticacion.validarAutenticado,controladorUsuario.EliminarParams);
router.delete('/',controladorAutenticacion.validarAutenticado,controladorUsuario.EliminarQuery);
router.put('/',controladorAutenticacion.validarAutenticado,controladorUsuario.ActualizarQuery);
module.exports = router;