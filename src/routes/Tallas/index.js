const{Router} = require('express');
const router = Router();
const controladorTalla = require('../../controllers/controladorTalla');

router.get('/',controladorTalla.listarTalla);
router.post('/',controladorTalla.GuardarTalla);
router.delete('/:id',controladorTalla.EliminarParamsTalla);
router.delete('/',controladorTalla.EliminarQueryTalla);
router.put('/',controladorTalla.ActualizarTalla);
module.exports = router;