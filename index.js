//SPREAD OPERATOR - expands an array into its individual parts
//can only be used in an argument to a function or with an array literal
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
	//arr2 = arr1;
	arr2 = [...arr1]; //arr2 = all the contents of arr1
	arr1[0] = 'potato'
})();
console.log(arr2);
