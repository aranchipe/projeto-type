const dadosCliente1: [number, string] = [1, 'Lucas'];
const dadosCliente2: [number, string, ...string[]] = [1, 'Lucas', 'Pedro'];

dadosCliente1[0] = 100;
console.log(dadosCliente2);
