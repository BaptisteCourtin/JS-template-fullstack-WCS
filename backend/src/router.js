const express = require("express");

const router = express.Router();

// ajouter les controllers ICI
const project = require("./controllers/project.controllers");
const profil = require("./controllers/profil.controllers");
const mailer = require("./services/mailer.response.services");


// --- GET ---
router.get("/projets", project.getAllProjects);
router.get("/projet/:id", project.getProjectById);

router.get("/profils", profil.getAllProfils);
router.get("/profil/:id", profil.getProfilById);

// --- POST ---
router.post("/projet/new", project.postProject);

router.post("/profil/new", profil.postProfil);

router.post("/contact/send", mailer.emailSender);

// --- PUT ---
router.put("/projet/update/:id", project.updateProjectById);

router.put("/profil/update/:id", profil.updateProfilById);

// --- DELETE ---
router.delete("/projet/delete/:id", project.deleteProjectById);

router.delete("/profil/delete/:id", profil.deleteProfilById);


module.exports = router;
