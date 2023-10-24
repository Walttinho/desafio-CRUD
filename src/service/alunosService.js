const alunoRepository = require("../repository/alunosRepository");
const schemaAluno = require("../middleware/validacao.middleware");

const criarAluno = async (alunoData) => {
  const { error } = await schemaAluno.validate(alunoData);

  if (error) {
    return { error };
  }

  const alunoExistente = await alunoRepository.alunoExistente(alunoData.nome);

  if (alunoExistente.length > 0) {
    throw new Error("Nome de aluno já existe no banco de dados.");
  }

  const resultado = await alunoRepository.criarAluno(alunoData);

  return resultado;
};

module.exports = { criarAluno };
