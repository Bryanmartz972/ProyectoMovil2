const{Router} = require('express');
const router = Router();
const controladorTarjeta = require('../../controllers/controladorTarjeta');

router.get('/',controladorTarjeta.listarTarjeta);
router.post('/',controladorTarjeta.GuardarTarjeta);
router.delete('/:id',controladorTarjeta.EliminarParamsTarjeta);
router.delete('/',controladorTarjeta.EliminarQueryTarjeta);
router.put('/',controladorTarjeta.ActualizarTarjeta);
module.exports = router;