enum Cores {
  vermelho = 10, // 0
  azul = 100, // 1
  amarelo = 200, // 2
}

/* console.log(Cores); */
/* console.log(Cores.vermelho);
console.log(Cores[0]); */

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.vermelho);
