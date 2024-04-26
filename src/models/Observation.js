const mongoose = require('mongoose');

const observationSchema = new mongoose.Schema({
  id: { type: String },
  enseignant: { type: mongoose.Schema.Types.ObjectId, ref: 'Enseignant' },
  apprenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Apprenant' },
  message: { type: String }
});

const Observation = mongoose.model('Observation', observationSchema);

module.exports = Observation;
