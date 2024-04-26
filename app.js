const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const cors = require('cors');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());
app.use(cors());

// Ou spécifier les origines autorisées
 app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware pour les routes
app.use('/', routes);

// Connexion à la base de données MongoDB
// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/schooloo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});


// Port d'écoute du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
