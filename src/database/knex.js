 const knex = require("knex")({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER||'postgres',
    password: process.env.DB_PASSWORD||'postgres',
    database: process.env.DB_NAME || "escola",
    port: process.env.DB_PORT || 5432,
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
