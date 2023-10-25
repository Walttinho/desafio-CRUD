const request = require("supertest");
const app = require("../src/app");

describe("Endpoints de Alunos", () => {
  let alunoId;

  it("deve criar um novo aluno", async () => {
    const res = await request(app).post("/alunos").send({
      nome: "Walter Fernandes",
      idade: 35,
      nota_primeiro_semestre: 6.8,
      nota_segundo_semestre: 7.4,
      nome_do_professor: "Professor",
      numero_da_classe: 5,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.mensagem).toEqual("Aluno Cadastrado com Sucesso");
    expect(res.body.resultado).toHaveProperty("id");
    alunoId = res.body.resultado.id;
  });

  it("deve retornar uma mensagem de erro ao criar um novo aluno (vazio)", async () => {
    const res = await request(app).post("/alunos").send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.error);
    expect(res.body.resultado).toBeUndefined();
  });

  it("deve retornar uma mensagem de erro ao criar um novo aluno (nome)", async () => {
    const res = await request(app).post("/alunos").send({
      idade: 35,
      nota_primeiro_semestre: 6.8,
      nota_segundo_semestre: 7.4,
      nome_do_professor: "Professor",
      numero_da_classe: 5,
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Nome é obrigatório");
    expect(res.body.resultado).toBeUndefined();
  });

  it("deve retornar uma mensagem de erro ao criar um novo aluno (idade)", async () => {
    const res = await request(app).post("/alunos").send({
      nome: "Walter Fernandes",
      nota_primeiro_semestre: 6.8,
      nota_segundo_semestre: 7.4,
      nome_do_professor: "Professor",
      numero_da_classe: 5,
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Idade é obrigatória");
    expect(res.body.resultado).toBeUndefined();
  });
  it("deve retornar uma mensagem de erro ao criar um novo aluno (nota_primeiro_semestre)", async () => {
    const res = await request(app).post("/alunos").send({
      nome: "Walter Fernandes",
      idade: 35,
      nota_primeiro_semestre: "6.8",
      nota_segundo_semestre: 7.4,
      nome_do_professor: "Professor",
      numero_da_classe: 5,
    });
    expect(res.statusCode).toEqual(409);
    expect(res.body.error).toEqual(
      "A nota do primeiro semestre deve ser um número"
    );
    expect(res.body.resultado).toBeUndefined();
  });

  it("deve retornar uma mensagem de erro ao criar um novo aluno (nota_segundo_semestre)", async () => {
    const res = await request(app).post("/alunos").send({
      nome: "Walter Fernandes",
      idade: 35,
      nota_primeiro_semestre: 6.8,
      nota_segundo_semestre: "7.4",
      nome_do_professor: "Professor",
      numero_da_classe: 5,
    });
    expect(res.statusCode).toEqual(409);
    expect(res.body.error).toEqual(
      "A nota do segundo semestre deve ser um número"
    );
    expect(res.body.resultado).toBeUndefined();
  });

  it("deve retornar uma mensagem de erro ao criar um novo aluno (nome_do_professor)", async () => {
    const res = await request(app).post("/alunos").send({
      nome: "Walter Fernandes",
      idade: 35,
      nota_primeiro_semestre: 6.8,
      nota_segundo_semestre: 7.4,
      numero_da_classe: 5,
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Nome do professor é obrigatório");
    expect(res.body.resultado).toBeUndefined();
  });

  it("deve retornar uma mensagem de erro ao criar um novo aluno (numero_da_classe)", async () => {
    const res = await request(app).post("/alunos").send({
      nome: "Walter Fernandes",
      idade: 35,
      nota_primeiro_semestre: 6.8,
      nota_segundo_semestre: 7.4,
      nome_do_professor: "Professor",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Número da classe é obrigatório");
    expect(res.body.resultado).toBeUndefined();
  });

  it("deve obter uma lista de alunos", async () => {
    const res = await request(app).get("/alunos");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("deve obter um aluno específico", async () => {
    const res = await request(app).get(`/alunos/${alunoId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", alunoId);
  });

  it("deve atualizar um aluno específico", async () => {
    const res = await request(app).patch(`/alunos/${alunoId}`).send({
      nome: "Walter Fernandes Atualizado",
      idade: 36,
      nota_primeiro_semestre: 7.0,
      nota_segundo_semestre: 7.5,
      nome_do_professor: "Professor Atualizado",
      numero_da_classe: 6,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", alunoId);
    expect(res.body).toHaveProperty("nome", "Walter Fernandes Atualizado");
  });

  it("deve excluir um aluno específico", async () => {
    const res = await request(app).delete(`/alunos/${alunoId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Aluno excluído com sucesso.");
  });
});
