/**
 * * Imports
 */
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

const app = express();

/** 
 * * Connexion à la base de données
 * todo : Améliorer la sécurité au niveau du mot de passes
 */
mongoose.connect('mongodb+srv://gasyh3:tvVHkvFR6R1gQ4Bd@clusterproject6.oq6iy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Securité en définissant divers en-têtes HTTP
app.use(helmet());

/**
 * * Régler les problèmes de CORS
 */
 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

/**
 * * Routes
 */
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

/**
 * * Exports
 */
  module.exports = app;