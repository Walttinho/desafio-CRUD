const AlunoService = require("../service/alunosService");

const criarAluno = async (req, res) => {
  try {
    const alunoData = req.body;
    const resultado = await AlunoService.criarAluno(alunoData);

    res
      .status(201)
      .json({ mensagem: "Aluno Cadastrado com Sucesso", resultado });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const obterAluno = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await AlunoService.obterAluno(id);

    res.status(200).json( resultado );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { criarAluno , obterAluno};
