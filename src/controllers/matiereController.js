const Matiere = require('../models/Matiere');

// Créer une matière
exports.createMatiere = async (req, res) => {
  try {
    const matiere = await Matiere.create(req.body);
    res.status(201).json(matiere);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les matières
exports.getAllMatieres = async (req, res) => {
  try {
    const matieres = await Matiere.find();
    res.status(200).json(matieres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une matière par son ID
exports.getMatiereById = async (req, res) => {
  try {
    const matiere = await Matiere.findById(req.params.id);
    if (!matiere) {
      return res.status(404).json({ message: "Matiere not found" });
    }
    res.status(200).json(matiere);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une matière
exports.updateMatiere = async (req, res) => {
  try {
    const matiere = await Matiere.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!matiere) {
      return res.status(404).json({ message: "Matiere not found" });
    }
    res.status(200).json(matiere);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une matière
exports.deleteMatiere = async (req, res) => {
  try {
    const matiere = await Matiere.findByIdAndDelete(req.params.id);
    if (!matiere) {
      return res.status(404).json({ message: "Matiere not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
