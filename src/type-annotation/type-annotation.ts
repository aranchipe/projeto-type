/* eslint-disable */

// Tipos básicos
let nome: string = 'Lucas';
let idade: number = 30;
let adulto: boolean = false;
let simbol: symbol = Symbol('qualquer-symbol');
/* let big: bigint = 10n; */

// Arrays
let arrayDeNumeros: Array<number> = [1,2,3,4,5];
let arrayDeNumeros2: number[] = [1,2,3,4,5];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos

export let pessoa: {nome: string, idade:number, adulto?:boolean} = {
    idade: 24,
    nome: 'Lucas'
}

// Funções

function soma(x:number, y:number) {
    return x+y
}

const soma2: (x: number, y: number) => number = (x,y) => x + y
