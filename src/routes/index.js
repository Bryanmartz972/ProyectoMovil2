const { Router }= require('express');
const router = Router();
router.get('/',(req,res) =>{
   res.json({"Titulo":"MOVIL 2"});
});
module.exports = router;
