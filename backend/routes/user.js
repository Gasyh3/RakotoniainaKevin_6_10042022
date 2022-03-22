/** 
 * * Imports
 */
 const express = require('express');
 const router = express.Router();
 const verifyEmail = require('../middleware/email-validator');
 const verifyPassword = require('../middleware/password-validator');
 const userControl = require('../controllers/user');
 
 /** 
  * * Routes
  */
 router.post('/signup', verifyEmail, verifyPassword, userControl.signup);
 router.post('/login', userControl.login);
 
 /**
  * * Exports
  */
 module.exports = router;