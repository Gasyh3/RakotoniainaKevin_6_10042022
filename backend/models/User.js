/** 
 * * Imports
 */
 const mongoose = require('mongoose');
 const uniqueValidator = require('mongoose-unique-validator');
 
 /**
  * * Modèle utilisateur
  * * email : String — adresse e-mail de l'utilisateur [unique]
  * * password : String — mot de passe de l'utilisateur haché
  */
 const userSchema = mongoose.Schema({
     email: {
         type: 'string',
         required: true,
         unique: true
     },
     password: {
         type: 'string',
         required: true
     }
 });
 
 /**
  * * Contrôle d'unicité
  */
 userSchema.plugin(uniqueValidator);
 
 /**
  * * Export
  */
 module.exports = mongoose.model('User', userSchema);