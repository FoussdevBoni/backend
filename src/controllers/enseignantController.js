const Enseignant = require('../models/Enseignant');

// Créer un enseignant
exports.createEnseignant = async (req, res) => {
  try {
    const enseignant = await Enseignant.create(req.body);
    res.status(201).json(enseignant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les enseignants
exports.getAllEnseignants = async (req, res) => {
  try {
    const enseignants = await Enseignant.find();
    res.status(200).json(enseignants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un enseignant par son ID
exports.getEnseignantById = async (req, res) => {
  try {
    const enseignant = await Enseignant.findById(req.params.id);
    if (!enseignant) {
      return res.status(404).json({ message: "Enseignant not found" });
    }
    res.status(200).json(enseignant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un enseignant
exports.updateEnseignant = async (req, res) => {
  try {
    const enseignant = await Enseignant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!enseignant) {
      return res.status(404).json({ message: "Enseignant not found" });
    }
    res.status(200).json(enseignant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un enseignant
exports.deleteEnseignant = async (req, res) => {
  try {
    const enseignant = await Enseignant.findByIdAndDelete(req.params.id);
    if (!enseignant) {
      return res.status(404).json({ message: "Enseignant not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
