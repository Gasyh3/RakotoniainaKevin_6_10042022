/** 
 * * Imports
*/
const express = require('express');
const router = express.Router();
const sauceControl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

/**
 * * Routes
 */
router.post('/', auth, multer, sauceControl.createSauce);
router.get('/:id', auth, sauceControl.getOneSauce);

/**
 * * Export
 */
module.exports = router;