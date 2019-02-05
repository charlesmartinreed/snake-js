function nextInLine(arr, item) {
	//this is a queue, so add the item to the end of the array
	//then, remove the first item on the list and return it
	arr.push(item);
	return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//IF STATEMENTS
function ourTrueOrFalse(isItTrue) {
	if (isItTrue) {
		return "Yes, it's true";
	}
	return "No, it's false"
}

var result = ourTrueOrFalse(5>2); //because Javascript is so damn loose, I can simply evaluate this statement within the arg block
console.log(result)

// == vs ===
// == uses coercion to attempt to match values, "12" IS EQUAL to 12.
// ===, the strict equality operator, does NOT use type conversion
function testEqual(val) {
	if (val == 12) {
		return "Equal"
	}
	return "Not Equal"
}

console.log(testEqual("12"));

function testStrictEqual(val) {
	if (val === 12) {
		return "Equal"
	}
	return "Not Equal"
}

console.log(testStrictEqual("12"));
