/* TUPLE TYPE */
const tuple: [number, string, boolean] = [42, 'hello', true];
// 'tuple' is declared as a tuple with specific element types.

const tupleWithOptionalValue: [string, number, string?] = ['avocado', 2];
// the last value is optional using this syntax and this is valid for all types.

const myTuple: [string, number, ...string[]] = ['avocado', 2];
// this tuple now assumes that all elements that are inserted at the end of the Array will be strings

export default { tuple, tupleWithOptionalValue, myTuple };
