const database = require("../../database");

const getAllProfils = async () => {
    const [result] = await database.query("SELECT * FROM profil");
    return result;
};

const getProfilById = async (req) => {
    const [result] = await database.query(
        "SELECT * FROM profil WHERE id = ?",
        [req.params.id]
    );
    return result;
};

const updateProfilById = async (req) => {
    const [result] = await database.query(
        `UPDATE profil SET nom = ?, prenom = ?, bio = ?, photo = ? WHERE id = ?`,
        [req.body.nom, req.body.prenom, req.body.bio, req.body.photo, req.params.id]
    );
    return result;
};

const postProfil = async (req) => {
    const { nom, prenom, bio, photo } = req.body;

    const [result] = await database.query(
        "INSERT INTO profil(nom, prenom, bio, photo) VALUES (?, ?, ?, ?)",
        [nom, prenom, bio, photo]
    );
    return result;
};

const deleteProfilById = async (req) => {
    const { id } = req.params;

    const [result] = await database.query("DELETE FROM profil WHERE id=?", [id]);
    return result;
};

module.exports = {
    getAllProfils,
    getProfilById,
    updateProfilById,
    postProfil,
    deleteProfilById,
};
