import React from 'react';

const FirstComponent = () => {
  const nome = "Eduardo";
  const sobrenome = "Castro Barbosa";
  const matricula = "21221300007";
  const nomeProfessor = "Felipe Batista";
  const nomeDisciplina = "Construção de Frontend";

  return (
    <div>
      <h2>Informações do Aluno e Disciplina</h2>
      <p>Nome completo: {nome} {sobrenome}</p>
      <p>Matrícula: {matricula}</p>
      <p>Professor: {nomeProfessor}</p>
      <p>Disciplina: {nomeDisciplina}</p>
    </div>
  );
};

export default FirstComponent;