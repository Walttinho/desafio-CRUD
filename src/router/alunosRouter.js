const routerAlunos = require("express").Router();
const alunos = require("../controller/alunosController");

routerAlunos.post("/", alunos.criarAluno);

module.exports = routerAlunos;
