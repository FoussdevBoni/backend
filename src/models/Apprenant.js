const mongoose = require('mongoose');

const apprenantSchema = new mongoose.Schema({
  id: { type: String },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  tel: { type: String },
  sexe: { type: String },
  age: { type: Number },
  naissance: { type: Date },
  statut: { type: String },
  moyenne: { type: Number },
  statutSco: { type: String },
  montantPaye: { type: Number },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' },
  ecole: { type: mongoose.Schema.Types.ObjectId, ref: 'Ecole' },
  classe: { type: mongoose.Schema.Types.ObjectId, ref: 'Classe' }
});

const Apprenant = mongoose.model('Apprenant', apprenantSchema);

module.exports = Apprenant;
