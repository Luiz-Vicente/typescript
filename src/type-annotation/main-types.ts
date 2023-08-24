/* Note: when variables are defined with an initial value, the type of these variables is already implicitly declared
and therefore it is not necessary to declare it, but in this file the idea is to list the available Annotation Types */

/* MAIN TYPES */
const name: string = 'Luiz'; // 'name' is declared as a string type with the value 'Luiz'.
const age: number = 19; // 'age' is declared as a number type with the value 19.
const isMan: boolean = true; // 'isMan' is declared as a boolean type with the value true.
const big: bigint = 10n; // 'big' is declared as a bigint type with the value 10n.
const symbol: symbol = Symbol('anything'); // 'symbol' is declared as a symbol type with the description 'anything'.

export default {
  name,
  age,
  isMan,
  big,
  symbol,
};
