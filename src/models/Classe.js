const mongoose = require('mongoose');

const classeSchema = new mongoose.Schema({
  id: { type: String },
  nom: { type: String, required: true }
});

const Classe = mongoose.model('Classe', classeSchema);

module.exports = Classe;
