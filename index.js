//const is "read only"
// function printManyTimes(str) {
// 	"use strict";
//
// 	const SENTENCE = str + " is cool!"; //common practice is all caps for const
//
// 	SENTENCE = str + " is amazing!" //invalid! "Assignment to constant variable"
//
// 	for(let i = 0; i < str.length; i+=2) {
// 		console.log(SENTENCE);
// 	}
// }

//printManyTimes("freeCodeCamp");

//however, you can still mutate individual elements of a const array
const s = [5, 7, 2];
function editInPlace() {
	"use strict";

	//s = [2, 5, 7]; //invalid

	//valid
	s[0] = 2;
	s[1] = 5;
	s[2] = 7;

	return s
}

console.log(editInPlace());
