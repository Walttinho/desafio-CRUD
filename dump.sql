-- Active: 1695136085980@@127.0.0.1@5432@escola
CREATE DATABASE escola;

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    idade INT,
    nota_primeiro_semestre DECIMAL(5, 2),
    nota_segundo_semestre DECIMAL(5, 2),
    nome_do_professor VARCHAR(255),
    numero_da_classe INT
);