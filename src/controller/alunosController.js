const AlunoService = require("../service/alunosService");

const criarAluno = async (req, res) => {
  try {
    const alunoData = req.body;
    const resultado = await AlunoService.criarAluno(alunoData);

    res.status(201).json({ mensagem: "Aluno Cadastrado com Sucesso", resultado });
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({ error: error.message });
    } else {
      // Se o erro não tiver um statusCode definido, trate como erro interno do servidor (500)
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};


const obterAluno = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await AlunoService.obterAluno(id);

    res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const listarAlunos = async (req, res) => {
  try {
    const resultado = await AlunoService.listarAlunos();

    res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const atualizarAluno = async (req, res) => {
  try {
    const id = req.params.id;
    const alunoData = req.body;
    const resultado = await AlunoService.atualizarAluno(id, alunoData);

    res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const deleteAluno = async (req,res)=>{
  try {
    const id = req.params.id;
    const resultado = await AlunoService.deleteAluno(id);

    res.status(200).json( resultado );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

}


module.exports = { criarAluno , obterAluno, listarAlunos, atualizarAluno, deleteAluno};
