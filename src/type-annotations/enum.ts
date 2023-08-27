/* ENUM TYPE */

console.log('\n************************************ Enum with numeric keys\n');

enum Color {
  Red,
  Green,
  Blue,
} // 'Color' is declared as an enum with enumerated values.
const chosenColor: Color = Color.Blue; // 'chosenColor' is declared as a Color enum value.

console.log(Color);
// log in terminal: { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(Color.Red);
// log in terminal: 0
console.log(Color[0]);
// log in terminal: 'Red'

console.log('\n************************************ Enum with custom numeric keys\n');

enum ColorWithAlteredKey {
  Red = 100,
  Green = 155,
  Blue = 15,
} /* this way we can determine the value of enum keys.
  Naturally the first item has a value of 0, the second item 1 and so on. */

console.log(ColorWithAlteredKey);
/* log in terminal: {
  '15': 'Blue',
  '100': 'Red',
  '155': 'Green',
  Red: 100,
  Green: 155,
  Blue: 15
} */
console.log(ColorWithAlteredKey.Red);
// log in terminal: 100
console.log(ColorWithAlteredKey[0]);
// log in terminal: undefined
/* in this case I'm trying to access a key that doesn't exist: 0.
  To access an element by the key now I can use the following values: 15, 100 and 155 */

console.log('\n************************************ Enum with custom string keys\n');

enum ColorWithStringKey {
  Red = 'MY RED',
  Green = 'MY GREEN',
  Blue = 'MY BLUE',
} // now the keys are strings

console.log(ColorWithStringKey);
// { Red: 'MY RED', Green: 'MY GREEN', Blue: 'MY BLUE' }
// now there are no more indexes
console.log(ColorWithStringKey.Red);
// log in terminal: 'MY RED'

console.log('\n************************************ Merged enums\n');

enum MergedEnum {
  Red = 'MY RED',
}

enum MergedEnum {
  Green,
  Blue,
}

enum MergedEnum {
  Yellow = 'MY YELLOW',
}

console.log(MergedEnum);
/* log in terminal:
{
  '0': 'Green',
  '1': 'Blue',
  Red: 'MY RED',
  Green: 0,
  Blue: 1,
  Yellow: 'MY YELLOW'
} */

export default {
  Color,
  chosenColor,
  ColorWithAlteredKey,
  ColorWithStringKey,
  MergedEnum,
};
