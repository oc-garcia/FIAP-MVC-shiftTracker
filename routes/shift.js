var express = require('express');
var router = express.Router();
var shiftController = require('../controllers/shiftController.js');

router.get('/', shiftController.getAll);
router.get('/:id', shiftController.getById);
router.get('/user/:userId', shiftController.getByUserId);
router.post('/', shiftController.create);
router.patch('/:id', shiftController.update);
router.delete('/:id', shiftController.delete);

module.exports = router;