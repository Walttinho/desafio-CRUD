const router = require('express').Router()
const routerAlunos = require('./alunosRouter')


router.use('/alunos', routerAlunos)


module.exports = router