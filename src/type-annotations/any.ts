/* ANY TYPE */

/* eslint-disable */
let dynamicValue: any = 'I can be anything!'; // 'dynamicValue' is declared with the 'any' type.
dynamicValue = 42; // We can assign a number to 'dynamicValue' without type checking.

let x: any;

x = 10;
x = '10';
console.log(x + 10); // the any type allows string + number concatenation

export default { dynamicValue, x };
