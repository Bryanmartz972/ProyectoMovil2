const{Router} = require('express');
const router = Router();
const controladorFactura = require('../../controllers/controladorFactura');

router.get('/',controladorFactura.ListarFactura);
router.post('/',controladorFactura.GuardarFactura);
router.delete('/:idfacturas',controladorFactura.EliminarParamsFactura);
router.delete('/',controladorFactura.EliminarQueryFactura);
router.put('/',controladorFactura.ActualizarFactura);
module.exports = router;