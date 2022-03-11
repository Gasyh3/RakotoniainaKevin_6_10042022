/** 
 * * Imports
*/
const express = require('express');
const router = express.Router();

const userControl = require('../controllers/user');

/** 
 * * Routes
*/
router.post('/signup', userControl.signup);
router.post('/login', userControl.login);

/**
 * * Exports
 */
module.exports = router;