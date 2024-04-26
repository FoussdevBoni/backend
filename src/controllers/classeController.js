const Classe = require('../models/Classe');

// Créer une classe
exports.createClasse = async (req, res) => {
  try {
    const classe = await Classe.create(req.body);
    res.status(201).json(classe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Classe.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une classe par son ID
exports.getClasseById = async (req, res) => {
  try {
    const classe = await Classe.findById(req.params.id);
    if (!classe) {
      return res.status(404).json({ message: "Classe not found" });
    }
    res.status(200).json(classe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une classe
exports.updateClasse = async (req, res) => {
  try {
    const classe = await Classe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!classe) {
      return res.status(404).json({ message: "Classe not found" });
    }
    res.status(200).json(classe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une classe
exports.deleteClasse = async (req, res) => {
  try {
    const classe = await Classe.findByIdAndDelete(req.params.id);
    if (!classe) {
      return res.status(404).json({ message: "Classe not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
