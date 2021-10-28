const{Router} = require('express');
const router = Router();
const controladorUsuario = require('../../controllers/controladorUsuario');

router.get('/',controladorUsuario.listarUsuarios);
router.post('/',controladorUsuario.Guardar);
router.delete('/:idusuario',controladorUsuario.EliminarParams);
router.delete('/',controladorUsuario.EliminarQuery);
router.put('/',controladorUsuario.ActualizarQuery);
module.exports = router;