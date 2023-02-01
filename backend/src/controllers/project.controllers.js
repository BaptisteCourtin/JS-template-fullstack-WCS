const projectModels = require("../models/project.models");

const getAllProjects = async (req, res) => {
  const result = await projectModels.getAllProjects(req);
  if (result.length === 0) {
    res.sendStatus(500);
  }
  return res.json(result);
};

const getProjectById = async (req, res) => {
  const result = await projectModels.getProjectById(req);
  if (result.length === 0) {
    res.sendStatus(500);
  }
  return res.json(result);
};

const updateProjectById = async (req, res) => {
  const result = await projectModels.updateProjectById(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postProject = async (req, res) => {
  const result = await projectModels.postProject(req);
  return res.json(result);
};

const deleteProjectById = async (req, res) => {
  const result = await projectModels.deleteProjectById(req);
  if (result.affectedRows === 0) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  updateProjectById,
  postProject,
  deleteProjectById,
};
