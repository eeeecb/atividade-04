import React from 'react';

const SecondComponent = () => {
  const array = [
    { nome: "Maria", idade: 25, profissao: "Engenheira" },
    { nome: "João", idade: 30, profissao: "Médico" },
    { nome: "Ana", idade: 28, profissao: "Advogada" },
    { nome: "Pedro", idade: 35, profissao: "Professor" },
    { nome: "Carla", idade: 22, profissao: "Estudante" }
  ];

  const ordenadoAlfabeticamente = [...array].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div>
      <h2>Lista de Pessoas</h2>
      <h3>Ordem original:</h3>
      <ol>
        {array.map((pessoa, index) => (
          <li key={index}>
            Nome: {pessoa.nome}, Idade: {pessoa.idade}, Profissão: {pessoa.profissao}
          </li>
        ))}
      </ol>
      <h3>Ordem alfabética:</h3>
      <ol>
        {ordenadoAlfabeticamente.map((pessoa, index) => (
          <li key={index}>
            Nome: {pessoa.nome}, Idade: {pessoa.idade}, Profissão: {pessoa.profissao}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SecondComponent;