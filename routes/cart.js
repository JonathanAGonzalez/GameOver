const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');

router.get('/', cartController.index);
router.get('/add/:id', cartController.add);


module.exports = router;