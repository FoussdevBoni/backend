const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  id: { type: String },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  adresse: { type: String },
  tel: { type: String },
  apprenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Apprenant' }]
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
