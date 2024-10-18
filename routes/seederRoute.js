const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();


router.get('/seeder', userController.seeder)



module.exports = router