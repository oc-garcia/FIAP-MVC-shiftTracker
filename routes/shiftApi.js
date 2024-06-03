const express = require('express');
const router = express.Router();
const shiftApiController = require('../controllers/shiftApiController.js');

router.get('/', shiftApiController.getAllApi);
router.get('/:id', shiftApiController.getByIdApi);
router.get('/user/:userId', shiftApiController.getByUserIdApi);
router.post('/', shiftApiController.createApi);
router.patch('/:id', shiftApiController.updateApi);
router.delete('/:id', shiftApiController.deleteApi);

module.exports = router;