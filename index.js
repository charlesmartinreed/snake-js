//DESTRUCTURING

var voxel = {x: 3.6, y: 7.4, z: 6.54};

//old way of assigning each element of an object to a variable
// var x = voxel.x;
// var y = voxel.y;
// var z = vowel.z;

//modern way, using DESTRUCTURING
const { x: a, y: b, z: c } = voxel; //a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTemperatureOfTomorrow(avgTemeratures) {
	"use strict";
	//get tomorrow field from avgTemeratures and assign it to tempOfTomorrow var
	const { tomorrow: tempOfTomorrow } = avgTemeratures;
	return tempOfTomorrow;
}

console.log(getTemperatureOfTomorrow(AVG_TEMPERATURES));

//DESTRUCTURING CAN ALSO BE USED TO ASSIGN VARIABLES FROM NESTED OBJECTS

const LOCAL_FORECAST = {
	today: { min: 72, max: 83 },
	tomorrow: { min: 73.3, max: 84.6 }
}

function getMaxOfTomorrow(forecast) {
	"use strict"
	//notice the nested brackets here - we're digging inside of forecast by destructuring twice
	const { tomorrow : { max: maxOfTomorrow } } = forecast;
	return maxOfTomorrow;
}

console.log(getMaxOfTomorrow(LOCAL_FORECAST));

//USING DESTRUCTURING TO ASSIGN VAIRIABLES FROM ARRAYS
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; //this assigns z and x to first two numbers of the array
console.log(z, x, y);

let m = 8, n = 6;
//you can't specify which variable from an array goes into which variable, it simply follows the order of items in said array; ex: [z, x, , y] would skip value 3 and put 4 in 'y'
(() => {
	"use strict";
	//we'll use destructuring to switch the places of m and n
	[m, n] = [n, m]

})();
console.log(m); //6
console.log(n); //8

//DESTRUCTURING PLUS REST OPERATOR
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

	const [ , , ...arr] = list; //grabs everything EXCEPT for the first two elements, as denoted by the empty spaces, and puts it into the array named arr.

	return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); //3, 4, 5, 6...
console.log(source); //1, 2, 3, 4, 5, 6...

//USING DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION PARAM
const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};

const half = (() => {
	//now, when stats is passed in, it is destructured using only max and min from the passed in object, stats
	//commonly used with API calls to filter down infomation down to what we actually need

	return function half({ max, min})  {
		return (stats.max + stats.min) / 2.0;
	};
})();

console.log(stats);
console.log(half(stats));
