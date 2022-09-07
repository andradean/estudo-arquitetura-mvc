const { request } = require("express");
const { response } = require("express");
const cursoModel = require("../model/cursos");

const cursoController = {
  get: (req, res) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.json(cursoModel.getListcurso());
  },
  insert: (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");

    const { id, titulo, descricao, professor } = request.body;
    const newCurso = cursoModel.insertCurso(id, titulo, descricao, professor);
    response.status(201).json(newCurso);
  },
  delete: (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");

    const { id } = request.params;
    const newCurso = cursoModel.deleteCurso(id);
    response.status(204);
  },
};
module.exports = cursoController;
