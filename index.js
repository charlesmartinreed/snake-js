//WHILE LOOPS

var myArray = [];

var i = 0;
while (i < 5) {
	myArray.push(i);
	i++;
}

console.log(myArray);

//FOR LOOPS
var ourArray = [];

for (var i = 0; i < 5; i++) {
	//initialization, conditional, increment/decrement
	ourArray.push(i);
}
console.log(ourArray);

//FOR LOOP, ODD NUMBERS
var oddArray = [];
for (var i=1; i < 10; i += 2) {
	oddArray.push(i);
}
console.log(oddArray);

//BACKWARDS FOR LOOPS
var backwardsArray = [];
for (var i = 10; i > 0; i--) {
	backwardsArray.push(i);
}
console.log(backwardsArray);

//iterate through array contents
var anotherArray = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < anotherArray.length; i++) {
	ourTotal += anotherArray[i]; //add to the total at each step
}

console.log(ourTotal) //42

//NESTED FOR LOOPS - factorial problem
function multiplyAll(arr) {
	var product = 1;

	for (var i=0; i < arr.length; i++) { //3
		for (var j=0; j < arr[i].length; j++) {
			product *= arr[i][j]; // at step 1, 1x1x2
		}
	}

	return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);
