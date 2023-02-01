const database = require("../../database");

const getAllProjects = async () => {
  const [result] = await database.query("SELECT * FROM projet");
  return result;
};

const getProjectById = async (req) => {
  const [result] = await database.query(
    "SELECT * FROM projet WHERE id = ?",
    [req.params.id]
  );
  return result;
};

const updateProjectById = async (req) => {
  const [result] = await database.query(
    `UPDATE projet SET nom = ?, photo = ?, description = ?, lien = ? WHERE id = ?`,
    [req.body.nom, req.body.photo, req.body.description, req.body.lien, req.params.id]
  );
  return result;
};

const postProject = async (req) => {
  const { nom, photo, description, lien } = req.body;

  const [result] = await database.query(
    "INSERT INTO projet(nom, photo, description, lien) VALUES (?, ?, ?, ?)",
    [nom, photo, description, lien]
  );
  return result;
};

const deleteProjectById = async (req) => {
  const { id } = req.params;

  const [result] = await database.query("DELETE FROM projet WHERE id=?", [id]);
  return result;
};

module.exports = {
  getAllProjects,
  getProjectById,
  updateProjectById,
  postProject,
  deleteProjectById,
};
