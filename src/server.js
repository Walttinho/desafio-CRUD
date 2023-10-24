const app = require('./app.js')
const { conexao } = require('./database/knex.js')


const port = process.env.PORT || 3000

app.listen(port, ()=>{
  conexao()
  console.log(`Servidor rodando na porta: ${port}`)
})