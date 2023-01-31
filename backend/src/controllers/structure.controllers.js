const structureModels = require("../models/structure.models.js");

const getAllStructures = async (req, res) => {
  const result = await structureModels.getAllStructures(req);
  if (result.length !== 0) {
    return res.json(result);
  } else {
    console.error(err);
    res.sendStatus(500);
  }
};

const getStructureById = async (req, res) => {
  const result = await structureModels.getStructureById(req);
  if (result.length !== 0) {
    return res.json(result);
  } else {
    console.error(err);
    res.sendStatus(500);
  }
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
  if (result.affectedRows === 0) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getAllStructures,
  getStructureById,
  updateStructureById,
  postStructure,
  deleteStructureById,
};
