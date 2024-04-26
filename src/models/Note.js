const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  id: { type: String },
  apprenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Apprenant' },
  matieres: [{
    matiere: { type: mongoose.Schema.Types.ObjectId, ref: 'Matiere' },
    valeur: { type: Number }
  }]
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
