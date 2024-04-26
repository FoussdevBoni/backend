const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parentController');
const enseignantController = require('../controllers/enseignantController');

const ecoleController = require('../controllers/ecoleController');
const classeController = require('../controllers/classeController');
const matiereController = require('../controllers/matiereController');
const observationController = require('../controllers/observationController');
const userController = require('../controllers/userController');
const apprenantController = require('../controllers/apprenantController');
const noteController = require('../controllers/noteController');

// Routes pour l'authentification des utilisateurs
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Routes pour les entités Parent
router.post('/parents', parentController.createParent);
router.get('/parents', parentController.getAllParents);
router.get('/parents/:id', parentController.getParentById);
router.put('/parents/:id', parentController.updateParent);
router.delete('/parents/:id', parentController.deleteParent);

// Routes pour les entités Enseignant
router.post('/enseignants', enseignantController.createEnseignant);
router.get('/enseignants', enseignantController.getAllEnseignants);
router.get('/enseignants/:id', enseignantController.getEnseignantById);
router.put('/enseignants/:id', enseignantController.updateEnseignant);
router.delete('/enseignants/:id', enseignantController.deleteEnseignant);



// Routes pour les entités Ecole
router.post('/ecoles', ecoleController.createEcole);
router.get('/ecoles', ecoleController.getAllEcoles);
router.get('/ecoles/:id', ecoleController.getEcoleById);
router.put('/ecoles/:id', ecoleController.updateEcole);
router.delete('/ecoles/:id', ecoleController.deleteEcole);

// Routes pour les entités Classe
router.post('/classes', classeController.createClasse);
router.get('/classes', classeController.getAllClasses);
router.get('/classes/:id', classeController.getClasseById);
router.put('/classes/:id', classeController.updateClasse);
router.delete('/classes/:id', classeController.deleteClasse);

// Routes pour les entités Matiere
router.post('/matieres', matiereController.createMatiere);
router.get('/matieres', matiereController.getAllMatieres);
router.get('/matieres/:id', matiereController.getMatiereById);
router.put('/matieres/:id', matiereController.updateMatiere);
router.delete('/matieres/:id', matiereController.deleteMatiere);

// Routes pour les entités Note
router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getAllNotes);
router.get('/notes/:id', noteController.getNoteById);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);

// Routes pour les entités Observation
router.post('/observations', observationController.createObservation);
router.get('/observations', observationController.getAllObservations);
router.get('/observations/:id', observationController.getObservationById);
router.put('/observations/:id', observationController.updateObservation);
router.delete('/observations/:id', observationController.deleteObservation);

// Routes pour les entités Apprenant
router.post('/apprenants', apprenantController.createApprenant);
router.get('/apprenants', apprenantController.getAllApprenants);
router.get('/apprenants/:id', apprenantController.getApprenantById);
router.put('/apprenants/:id', apprenantController.updateApprenant);
router.delete('/apprenants/:id', apprenantController.deleteApprenant);

module.exports = router;
