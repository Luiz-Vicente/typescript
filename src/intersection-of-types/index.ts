/* INTERSECTION TYPE */

type Name = { name: string };
type Code = { code: string };
type Color = { color: string };
type Product = Name & Code & Color;

const product: Product = {
  name: 'Keyboard',
  code: 'tech',
  color: 'black',
};

type One = 'A' | 'B' | 'C';
type Two = 'A' | 'B' | 'D';
type Intersection = One & Two; // Intersection = 'A'

export { Name, Code, Color, Product, product, Intersection };
