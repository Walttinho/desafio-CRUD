const joi = require("joi");

const schemaAluno = joi.object({
  nome: joi.string().min(3).required(),
  idade: joi.number().integer().required(),
  nota_primeiro_semestre: joi.number().precision(2),
  nota_segundo_semestre:joi.number().precision(2),
  nome_do_professor: joi.string().min(3).required(),
  numero_da_classe: joi.number().integer().required(),
});

module.exports = schemaAluno