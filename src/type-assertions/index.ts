/* TYPE ASSERTIONS */

// Conditional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'My Value';
input.focus();

// No recomended
const body4 = document.querySelector('body') as unknown as number;

export default { body1, body2, body3, body4 };
