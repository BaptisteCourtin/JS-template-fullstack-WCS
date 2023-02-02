const profilModels = require("../models/profil.models");

const getAllProfils = async (req, res) => {
    const result = await profilModels.getAllProfils(req);
    if (result.length === 0) {
        res.sendStatus(500);
    }
    return res.json(result);
};

const getProfilById = async (req, res) => {
    const result = await profilModels.getProfilById(req);
    if (result.length === 0) {
        res.sendStatus(500);
    }
    return res.json(result);
};

const updateProfilById = async (req, res) => {
    const result = await profilModels.updateProfilById(req);
    if (result.affectedRows === 0) {
        res.status(404).send("Not found");
    } else {
        res.sendStatus(204);
    }
};

const postProfil = async (req, res) => {
    const result = await profilModels.postProfil(req);
    return res.json(result);
};

const deleteProfilById = async (req, res) => {
    const result = await profilModels.deleteProfilById(req);
    if (result.affectedRows === 0) {
        res.sendStatus(404);
    } else {
        res.sendStatus(204);
    }
};

module.exports = {
    getAllProfils,
    getProfilById,
    updateProfilById,
    postProfil,
    deleteProfilById,
};
