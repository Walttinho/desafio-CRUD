 require('dotenv').config()

 const knex = require("knex")({
  client: "pg",
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
     ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false, 
  },
});

const conexao = async () => {
  try {
    await knex.raw("SELECT 1");
    console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`);
  } catch (erro) {
    console.error("Erro ao conectar ao banco de dados:", erro);
  }
};

const criarTabelaSeNaoExistir = async () => {
  const existeTabela = await knex.schema.hasTable("alunos");

  if (!existeTabela) {
    await knex.schema.createTable("alunos", (table) => {
      table.increments("id").primary();
      table.string("nome", 255);
      table.integer("idade");
      table.decimal("nota_primeiro_semestre", 5, 2);
      table.decimal("nota_segundo_semestre", 5, 2);
      table.string("nome_do_professor", 255);
      table.integer("numero_da_classe");
    });
  }
};

conexao();
criarTabelaSeNaoExistir();

module.exports = knex;


