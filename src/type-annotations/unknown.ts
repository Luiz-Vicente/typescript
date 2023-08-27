/* UNKNOWN TYPE */

const someValue: unknown = 'unknown type'; // 'someValue' is declared with the 'unknown' type.

let x: unknown;

x = '10';
// console.log(x + 10); // 'unknow' type does not allow concatenation between string and number

x = 100;
if (typeof x === 'number') console.log(x + 10);
// here the typescript recognizes that I ensured that 'x' was a number and therefore allows the operation

export default { someValue, x };
