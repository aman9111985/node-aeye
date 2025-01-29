const express = require('express');
const router = express.Router();
const { signupValidation } = require('../helpers/validation');

const userController = require('../controllers/userController');

router.post('/registerDevice', signupValidation, userController.registerDevice);
module.exports = router;
