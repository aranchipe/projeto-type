type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa1: Pessoa = {
  idade: 25,
  nome: 'Lucas',
  sobrenome: 'Aranchipe',
};

console.log(pessoa1);

// Module mode
export { pessoa1 };
