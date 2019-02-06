//parse int takes a string and returns an integer. If conversion not possible, NaN is returned

function convertToInt(str) {
	return parseInt(str);
}

//radix can be used to change the base value - base-10, base-2, base-8, etc.
function convertFromBinary(str) {
	return parseInt(str, 2); //the second param indicates the base to convert FROM
}



let value = convertToInt("9");
let value2 = convertFromBinary("10011"); //19

console.log(value);
console.log(value2);
console.log(value3);
