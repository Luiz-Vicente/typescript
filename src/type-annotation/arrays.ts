/* ARRAY TYPES */
const names: string[] = ['Alice', 'Bob', 'Charlie']; // 'names' is declared as an array of strings.
const ages: number[] = [25, 30, 22]; // 'ages' is declared as an array of numbers.
const fruits: readonly string[] = ['Orange', 'Pinaple', 'Apple']; // This array cannot be changed.
// also:
const ArrayNames: Array<string> = ['Alice', 'Bob', 'Charlie']; // 'names' is declared as an array of strings.
const ArrayAges: Array<number> = [25, 30, 22]; // 'ages' is declared as an array of numbers.
const ArrayFruits: ReadonlyArray<string> = ['Orange', 'Pinaple', 'Apple']; // This array cannot be changed.

export default {
  names,
  ages,
  fruits,
  ArrayNames,
  ArrayAges,
  ArrayFruits,
};
