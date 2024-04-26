const mongoose = require('mongoose');

const matiereSchema = new mongoose.Schema({
  id: { type: String },
  nom: { type: String, required: true },
  coefficient: { type: Number },
  enseignants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Enseignant' }],
  classe: { type: mongoose.Schema.Types.ObjectId, ref: 'Classe' },
  moyenne: { type: Number }
});

const Matiere = mongoose.model('Matiere', matiereSchema);

module.exports = Matiere;
