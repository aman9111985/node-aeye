const { check } = require('express-validator');

exports.signupValidation = [
    check('name').not().isEmpty().withMessage('Thing name is required'),
    check('ip').not().isEmpty().withMessage('IP address is required'),
    check('username').isLength({min: 6}).withMessage('UserName must be at least 6 characters long')
];   
