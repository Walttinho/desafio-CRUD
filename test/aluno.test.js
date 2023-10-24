const request = require('supertest');
const app = require('../src/app');

describe('Endpoints de Alunos', () => {
  let alunoId;

  it('deve criar um novo aluno', async () => {
    const res = await request(app)
      .post('/alunos')
      .send({
        nome: 'Walter Fernandes',
        idade: 35,
        nota_primeiro_semestre: 6.8,
        nota_segundo_semestre: 7.4,
        nome_do_professor: 'Professor',
        numero_da_classe: 5,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.mensagem).toEqual('Aluno Cadastrado com Sucesso');
    expect(res.body.resultado).toHaveProperty('id');
    alunoId = res.body.resultado.id;
  });

  it('deve obter uma lista de alunos', async () => {
    const res = await request(app).get('/alunos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('deve obter um aluno específico', async () => {
    const res = await request(app).get(`/alunos/${alunoId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', alunoId);
  });

  it('deve atualizar um aluno específico', async () => {
    const res = await request(app)
      .patch(`/alunos/${alunoId}`)
      .send({
        nome: 'Walter Fernandes Atualizado',
        idade: 36,
        nota_primeiro_semestre: 7.0,
        nota_segundo_semestre: 7.5,
        nome_do_professor: 'Professor Atualizado',
        numero_da_classe: 6,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', alunoId);
    expect(res.body).toHaveProperty('nome', 'Walter Fernandes Atualizado');
  });

  it('deve excluir um aluno específico', async () => {
    const res = await request(app).delete(`/alunos/${alunoId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Aluno excluído com sucesso.");
  });
  
});
