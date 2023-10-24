 const knex = require("knex")({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ,
    port: process.env.DB_PORT ,
    ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
  },
}); 



const conexao = async () => {
  await knex
    .raw("SELECT 1")
    .then(() => {
      console.log(`Conectado ao bando de dados ${process.env.DB_NAME}`);
    })
    .catch((erro) => {
      console.error("Erro ao conectar ao banco de dados:", erro);
    });
};
conexao()

module.exports = knex
