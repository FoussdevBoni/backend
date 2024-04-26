const Ecole = require('../models/Ecole');

// Créer une école
exports.createEcole = async (req, res) => {
  try {
    const ecole = await Ecole.create(req.body);
    res.status(201).json(ecole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les écoles
exports.getAllEcoles = async (req, res) => {
  try {
    const ecoles = await Ecole.find();
    res.status(200).json(ecoles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une école par son ID
exports.getEcoleById = async (req, res) => {
  try {
    const ecole = await Ecole.findById(req.params.id);
    if (!ecole) {
      return res.status(404).json({ message: "Ecole not found" });
    }
    res.status(200).json(ecole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une école
exports.updateEcole = async (req, res) => {
  try {
    const ecole = await Ecole.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ecole) {
      return res.status(404).json({ message: "Ecole not found" });
    }
    res.status(200).json(ecole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une école
exports.deleteEcole = async (req, res) => {
  try {
    const ecole = await Ecole.findByIdAndDelete(req.params.id);
    if (!ecole) {
      return res.status(404).json({ message: "Ecole not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
