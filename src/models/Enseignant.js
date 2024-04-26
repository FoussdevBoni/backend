const mongoose = require('mongoose');

const enseignantSchema = new mongoose.Schema({
  id: { type: String },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  matieres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Matiere' }],
  ecoles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ecole' }],
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Classe' }],
  email: { type: String, required: true, unique: true },
  adresse: { type: String },
  tel: { type: String }
});

const Enseignant = mongoose.model('Enseignant', enseignantSchema);

module.exports = Enseignant;
