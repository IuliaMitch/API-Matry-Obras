const router = require('express').Router();
const controllerObras = require('../controllers/obras.controller')


router.get('/todas-obras', controllerObras.findAllObrasController);
router.get('/obra/:id', controllerObras.findByIdObraController);
router.post('/create', controllerObras.createObraController);
router.put('/update/:id', controllerObras.updateByIdObraController);
router.delete('/delete/:id', controllerObras.deleteByIdObraController);

module.exports = router;
