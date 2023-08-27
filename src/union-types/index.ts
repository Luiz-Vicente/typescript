/* UNION TYPES */

function print(value: number | string | boolean): void {
  // value type should be Number or String or Boolean
  console.log(value);
}

print(true);
print(12);
print('yes, my string');
// print(null); // the typescript does not allow me to use as a parameter a type that was not specified

export default print;
