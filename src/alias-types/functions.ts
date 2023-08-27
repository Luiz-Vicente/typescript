/* FUNCTIONS WITH ALIAS TYPE */

type MapStringsCallback = (item: string) => string;
// type MyType = (parameter: type) => function returned type;

export function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped);
// log in terminal: ['A', 'B', 'C']
