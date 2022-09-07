const express = require("express");
const cursoController = require("../controller/index");

const routes = express.Router();

routes.get("/", cursoController.get);
routes.post("/cadastrar", cursoController.insert);
routes.delete("/excluir-curso/:id", cursoController.delete);

module.exports = routes;
