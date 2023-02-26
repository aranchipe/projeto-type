// Quando uma função não retorna nada

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Lucas', 'Leite');

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Leite',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
