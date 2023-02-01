const express = require("express");

const router = express.Router();
// const database = require("../database"); // si besoin

const project = require("./controllers/project.controllers");
// ajouter les controllers ICI

router.get("/projets", project.getAllProjects);
router.get("/projets/:id", project.getProjectById);

router.post("/projet/new", project.postProject);

router.put("/projet/:id", project.updateProjectById);

router.delete("/projet/:id", project.deleteProjectById);

module.exports = router;
