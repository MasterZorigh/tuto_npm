// (Étape 1) Import de express
var express = require("express");

// (Étape 1) Définition du router
var router = express.Router();

// (Étape 2) Ajout de la route qui permet d'ajouter un étudiant
router.post("/", (req, res) => {
  return res.status(201).json("Bien joué, t'as créé un élève. Connard.");
});

// (Étape 2) Ajout de la route qui permet d'afficher tous les étudiants
router.get("/", (req, res) => {
  return res.status(200).json("Hmm, nan.");
});

// (Étape 2) Ajout de la route qui permet d'afficher un seul étudiant grâce à son identifant
router.get("/:id", (req, res) => {
  return res
    .status(200)
    .json(
      "Ah parce que tu penses que je vais te donner l'élève que tu attends ?"
    );
});

// (Étape 2) Ajout de la route qui permet de modifier un seul étudiant grâce à son identifant
router.put("/:id", (req, res) => {
  return res.status(200).json("Bien joué, tu l'as mis à jour. P'tit con.");
});

// (Étape 2) Ajout de la route qui permet de supprimer un seul étudiant grâce à son identifant
router.delete("/:id", (req, res) => {
  return res
    .status(200)
    .json(
      "ATTENTION, TU VIENS DE SUPPRIMER UN ÉLÈVE DANS LE PLUS GRAND DES CALMES."
    );
});

// (Étape 1) Export du router
module.exports = router;
