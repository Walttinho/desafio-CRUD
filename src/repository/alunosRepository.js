const knex = require("../database/knex");

const criarAluno = async (alunoData) => {
  try {
    const alunosInseridos = await knex("alunos")
      .insert(alunoData)
      .returning("*");

    if (alunosInseridos.length === 0) {
      throw new Error("Nenhum aluno foi retornado após a criação.");
    }

    return alunosInseridos[0];
  } catch (error) {
    throw new Error(
      "Erro ao criar o aluno no banco de dados: " + error.message
    );
  }
};

const alunoExistente = async (nome) => {
  aluno = await knex("alunos").where("nome", nome);

  return aluno;
};

const obterAluno = async (id) => {
  const aluno = await knex("alunos").where("id", id);

  return aluno[0];
};

const listarAlunos = async () => {
  const lista = await knex("alunos").select("*");
  return lista;
};

module.exports = { criarAluno, alunoExistente, obterAluno , listarAlunos};
