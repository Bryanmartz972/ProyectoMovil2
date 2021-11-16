const{Router} = require('express');
const router = Router();
const controladorFactura = require('../../controllers/controladorFactura');
const controladorAutenticacion= require('../../controllers/autenticacion');

router.get('/',controladorAutenticacion.validarAutenticado, controladorFactura.ListarFactura);
router.post('/',controladorAutenticacion.validarAutenticado, controladorFactura.GuardarFactura);
router.delete('/:idfacturas',controladorAutenticacion.validarAutenticado, controladorFactura.EliminarParamsFactura);
router.put('/',controladorAutenticacion.validarAutenticado, controladorFactura.ModificarFactura);
module.exports = router;