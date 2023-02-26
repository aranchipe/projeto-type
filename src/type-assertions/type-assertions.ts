/* Recomendado*/
// Condicional
const body1 = document.querySelector('body'); // HTMLBodyElement | null
if (body1) body1.style.background = 'red'; // HTMLBodyElement

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';

/* Não Recomendado */

// Type assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
