const listCurso = require("../database/curso.json");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

function getListcurso() {
  return listaCurso;
}

function insertCurso(id, titulo, descricao, professor) {
  const newCurso = {
    id: randomUUID(),
    titulo: titulo,
    descricao: descricao,
    professor: professor,
  };

  listCurso.push(newCurso);

  fs.writeFileSync(
    path.resolve("database", "curso.json"),
    JSON.stringify(listCurso)
  );

  return newCurso;
}

function deleteCurso(id) {
  const cursoindex = listCurso.findIndex((curso) => curso.id === id);
  listCurso.splice(cursoindex, 1);

  fs.writeFileSync(
    path.resolve("database", "curso.json"),
    JSON.stringify(listCurso)
  );
}

module.exports = { getListcurso, insertCurso, deleteCurso };
