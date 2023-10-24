const routerAlunos = require("express").Router();
const alunos = require("../controller/alunosController");

routerAlunos.post("/", alunos.criarAluno);
routerAlunos.get('/:id',alunos.obterAluno)

module.exports = routerAlunos;
