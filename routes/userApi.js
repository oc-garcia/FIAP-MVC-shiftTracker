const express = require('express');
const router = express.Router();
const userApiController = require('../controllers/userApiController.js');

router.get('/', userApiController.getAllApi);
router.get('/:id', userApiController.getByIdApi);
router.post('/', userApiController.createApi);
router.patch('/:id', userApiController.updateApi);
router.delete('/:id', userApiController.deleteApi);

module.exports = router;