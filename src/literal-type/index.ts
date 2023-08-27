/* LITERAL TYPE */

/* eslint-disable */
let onlyNumber = 10;
/* declaring the variable with a numeric value, the typescript assumes that its value will always be numeric
  (this also applies to other types such as string and boolean for example) */

const literalNumberTen = 10; // same: const literalNumberTen: 10 = 10;
/* because it is a constant, the typescript assumes a literal type of '10',
  that is, no other value is accepted beyond 10 because the value is constant */

const happyPerson = {
  name: 'Luiz' as const, // so 'Luiz' is a literal type and name can only be 'Luiz'
  age: 19,
};

export default { onlyNumber, literalNumberTen, happyPerson };
