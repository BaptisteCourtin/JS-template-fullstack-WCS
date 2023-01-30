const structureModels = require("../models/structure.models.js");

const getAllStructures = async (req, res) => {
  const result = await structureModels.getAllStructures(req);
  return res.json(result);
};

const getStructureById = async (req, res) => {
  const result = await structureModels.getStructureById(req);
  return res.json(result);
};

const updateStructureById = async (req, res) => {
  const result = await structureModels.updateStructureById(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postStructure = async (req, res) => {
  const result = await structureModels.postStructure(req);
  return res.json(result);
};

const deleteStructureById = async (req, res) => {
  const result = await structureModels.deleteStructureById(req);
  return res.json(result);
};

module.exports = {
  getAllStructures,
  getStructureById,
  updateStructureById,
  postStructure,
  deleteStructureById,
};
