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
router.put('/:id', auth, multer, sauceControl.modifySauce);
router.delete('/:id', auth, sauceControl.deleteSauce);

/**
 * * Export
 */
module.exports = router;