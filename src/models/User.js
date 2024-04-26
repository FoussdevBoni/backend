const mongoose = require('mongoose');

const puserAuthSchema = new mongoose.Schema({
  id: { type: String },
  mail: { type: String, required: true, unique: true },
  mdp: { type: String, required: true }
});

const User = mongoose.model('User', puserAuthSchema);

module.exports = User;
