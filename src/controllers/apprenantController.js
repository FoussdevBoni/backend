const Apprenant = require('../models/Apprenant');

// Créer un nouvel apprenant
exports.createApprenant = async (req, res) => {
  try {
    const apprenant = await Apprenant.create(req.body);
    res.status(201).json(apprenant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les apprenants
exports.getAllApprenants = async (req, res) => {
  try {
    const apprenants = await Apprenant.find();
    res.status(200).json(apprenants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un apprenant par son ID
exports.getApprenantById = async (req, res) => {
  try {
    const apprenant = await Apprenant.findById(req.params.id);
    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant not found" });
    }
    res.status(200).json(apprenant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un apprenant
exports.updateApprenant = async (req, res) => {
  try {
    const apprenant = await Apprenant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant not found" });
    }
    res.status(200).json(apprenant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un apprenant
exports.deleteApprenant = async (req, res) => {
  try {
    const apprenant = await Apprenant.findByIdAndDelete(req.params.id);
    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
