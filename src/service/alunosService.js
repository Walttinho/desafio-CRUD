const alunoRepository = require("../repository/alunosRepository");
const schemaAluno = require("../middleware/validacao.middleware");
const { resourceLimits } = require("worker_threads");

const criarAluno = async (alunoData) => {
  const { error } = schemaAluno.validate(alunoData);

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

const obterAluno = async (id) => {
  const resultado = await alunoRepository.obterAluno(id);

  return resultado;
};

const listarAlunos = async () => {
  const resultado = await alunoRepository.listarAlunos();

  return resultado;
};

const atualizarAluno = async (id, alunoData) => {
  const alunoExistente = await alunoRepository.obterAluno(id);

  if (!alunoExistente) {
    throw new Error(
      "Aluno não encontrado no banco de dados. A atualização não foi realizada."
    );
  }

  const resultado = await alunoRepository.atualizarAluno(id, alunoData);

  return resultado[0];
};

module.exports = {
  criarAluno,
  obterAluno,
  listarAlunos,
  atualizarAluno,
};
