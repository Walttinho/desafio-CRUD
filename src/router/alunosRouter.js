const routerAlunos = require("express").Router();
const alunos = require("../controller/alunosController");

routerAlunos.post("/", alunos.criarAluno);
routerAlunos.get("/", alunos.listarAlunos);
routerAlunos.get('/:id',alunos.obterAluno)
routerAlunos.patch('/:id',alunos.atualizarAluno)
routerAlunos.delete('/:id',alunos.deleteAluno)


module.exports = routerAlunos;
