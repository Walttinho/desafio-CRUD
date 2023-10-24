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

module.exports = { criarAluno, alunoExistente };
