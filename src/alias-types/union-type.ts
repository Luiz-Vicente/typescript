/* UNION WITH ALIAS TYPE */

type RGBColors = 'Red' | 'Green' | 'Blue';
type CMYKColors = 'Cyan' | 'Mangenta' | 'Yellow' | 'Black';
type AcceptedColors = RGBColors | CMYKColors;

export default AcceptedColors;
