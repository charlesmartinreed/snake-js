//export means this function can be used by other files
const capitalizeString = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

//fallback exports, or defaults, can be used when exporting single elements
export default function substract(x, y) { return x - y;}
