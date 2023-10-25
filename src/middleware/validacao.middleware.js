const yup = require('yup');
const {pt} = require('yup-locale-pt')


yup.setLocale(pt);

const schemaAluno = yup.object().shape({
  nome: yup.string().min(3).required('Nome é obrigatório'),
  idade: yup.number().integer().required('Idade é obrigatória'),
  nota_primeiro_semestre: yup.number().typeError('A nota do primeiro semestre deve ser um número').nullable(),
  nota_segundo_semestre: yup.number().typeError('A nota do segundo semestre deve ser um número').nullable(),
  nome_do_professor: yup.string().min(3).required('Nome do professor é obrigatório'),
  numero_da_classe: yup.number().integer().required('Número da classe é obrigatório'),
});


module.exports = schemaAluno