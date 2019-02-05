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
