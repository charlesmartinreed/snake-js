//DEFAULT PARAMETERS

const increment = (function() {
	//if a particular argument isn't supplied, the default paramater value is used instead
	return function increment(number, value = 1) {
		return number + value;
	};
})();
console.log(increment(5, 2)); //7
console.log(increment(5)); //6

//THE REST OPERATOR - CREATE VARIADIC FUNCTIONS
const sum = (function() {
	// return function sum(x, y, z) { //becomes
	return function sum(...args) { //everything passed in is converted to an array
		//const args = [x, y, z]; //not necessary with rest operator, ...args
		return args.reduce((a, b) => a + b, 0);
	};
}());

console.log(sum(1, 2, 3, 4, 5)); //15
