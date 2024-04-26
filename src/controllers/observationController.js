const Observation = require('../models/Observation');

// Créer une observation
exports.createObservation = async (req, res) => {
  try {
    const observation = await Observation.create(req.body);
    res.status(201).json(observation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les observations
exports.getAllObservations = async (req, res) => {
  try {
    const observations = await Observation.find();
    res.status(200).json(observations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une observation par son ID
exports.getObservationById = async (req, res) => {
  try {
    const observation = await Observation.findById(req.params.id);
    if (!observation) {
      return res.status(404).json({ message: "Observation not found" });
    }
    res.status(200).json(observation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une observation
exports.updateObservation = async (req, res) => {
  try {
    const observation = await Observation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!observation) {
      return res.status(404).json({ message: "Observation not found" });
    }
    res.status(200).json(observation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une observation
exports.deleteObservation = async (req, res) => {
  try {
    const observation = await Observation.findByIdAndDelete(req.params.id);
    if (!observation) {
      return res.status(404).json({ message: "Observation not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
