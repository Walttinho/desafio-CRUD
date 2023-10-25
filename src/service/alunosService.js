const alunoRepository = require("../repository/alunosRepository");
const schemaAluno = require("../middleware/validacao.middleware");

const criarAluno = async (alunoData) => {
  try {
    await schemaAluno.validate(alunoData, { abortEarly: false });
  } catch (error) {
    const errorMessage = error.inner.map((detail) => detail.message).join(", ");
    const statusCode = 400;
    throw { statusCode, message: errorMessage };
  }

  const alunoExistente = await alunoRepository.alunoExistente(alunoData.nome);

  if (alunoExistente.length > 0) {
    const statusCode = 409;
    throw { statusCode, message: "Nome de aluno já existe no banco de dados." };
  }

  const resultado = await alunoRepository.criarAluno(alunoData);

  return resultado;
};

const obterAluno = async (id) => {
  const resultado = await alunoRepository.obterAluno(id);
  if (!resultado) {
    throw new Error("Aluno não encontrado no banco de dados.");
  }
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

const deleteAluno = async (id) => {
  const alunoExistente = await alunoRepository.obterAluno(id);

  if (!alunoExistente) {
    throw new Error(
      "Aluno não encontrado no banco de dados. A atualização não foi realizada."
    );
  }

  await alunoRepository.deleteAluno(id);

  return "Aluno excluído com sucesso.";
};

module.exports = {
  criarAluno,
  obterAluno,
  listarAlunos,
  atualizarAluno,
  deleteAluno,
};
