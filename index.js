/*
var magic = function() {
	return new Date();
};
*/

//CAN BE CONVERTED INTO ARROW FUNCTIONS
var magic = () => {
	return new Date();
};

//THIS CAN BE SHORTENED EVEN FURTHER
const MAGIC_CONCISE = () => new Date();

//ARROW FUNCTIONS, LIKE REGULAR FUNCTIONS, CAN ACCEPT ARGUMENTS
var myConcat = function(arr1, arr2) {
	return arr1.concat(arr2);
};

const CONCAT_CONCISE = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
console.log(CONCAT_CONCISE([1, 2], [3, 4, 5]));
