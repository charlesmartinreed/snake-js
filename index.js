function freezeObj() {
	"use strict";

	//create this constant - can currently be changed
	const MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS); //prevents mutation of const objects and arrays - makes MATH_CONSTANTS a "read only"

	try {
		MATH_CONSTANTS.PI = 99;
	} catch(ex) {
		console.log(ex); //if this doesn't work, return this exception
	}
	//otherwise, return the altered PI
	return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
