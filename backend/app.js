/**
 * * Imports
 */
const express = require('express');
const mongoose = require('mongoose');

/** 
 * * Connexion à la base de données
 * todo : Améliorer la sécurité au niveau du mot de passes
 */
mongoose.connect('mongodb+srv://gasyh3:tvVHkvFR6R1gQ4Bd@clusterproject6.oq6iy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));