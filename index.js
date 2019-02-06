//HIGHER ORDER FUNCTIONS, map, order and reduce
//these take functions as arguments

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
	//compute squares of only positive integers - FILTER using arrow func
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	//result is array with only integers that are greater than 0 and squared
	return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray); //16, 1764, 36
console.log(squaredIntegers);

const names = ["Charleston", "David", "Brandice", "Michael"];

const filterNames = (name) => {
	const filtered = name.filter( value => value.length > 5);
	return filtered;
}
console.log(filterNames(names)); //Charleston, Brandice, Michael
