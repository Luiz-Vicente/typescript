/* OBJECT TYPE */

const person: {
  name: string;
  age: number;
} = {
  // 'person' is declared as an object with specific properties.
  name: 'John',
  age: 28,
};

const myObject: { readonly propA: string; propB: number } = {
  propA: 'string prop',
  propB: 10,
};

// myObject.propA = 'this property cannot be changed because of "readonly"';

export default { person, myObject };
