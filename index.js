//MATHS

function randomFraction() {


	return Math.random(); //returns a number between 0 and 1, non-inclusive

}

var randomWholeNumber = Math.floor(Math.random() * 20); //between 0 and 19

function generateRandomNumberinRange(ourMin, ourMax) {
 	return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(randomFraction());
console.log(randomWholeNumber);
console.log(generateRandomNumberinRange(1, 9));
