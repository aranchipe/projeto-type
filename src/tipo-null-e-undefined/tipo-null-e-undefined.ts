export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta Inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}
