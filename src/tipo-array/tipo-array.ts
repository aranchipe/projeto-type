export function multiplicaArgs(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('Lucas', 'Leite');
console.log(result);
console.log(concatenacao);
