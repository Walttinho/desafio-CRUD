const router = require('express').Router()
const routerAlunos = require('./alunosRouter')
const swaggerRouter = require('./swaggerRoute')



router.use('/alunos', routerAlunos)
router.use("/doc", swaggerRouter)

module.exports = router