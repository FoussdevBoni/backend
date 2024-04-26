const mongoose = require('mongoose');

const ecoleSchema = new mongoose.Schema({
  id: { type: String },
  nom: { type: String, required: true },
  email: { type: String },
  tel: { type: String },
  ville: { type: String },
  adresse: { type: String }
});

const Ecole = mongoose.model('Ecole', ecoleSchema);

module.exports = Ecole;
