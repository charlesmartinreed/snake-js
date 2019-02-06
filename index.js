//NESTED TERNARIES

function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-10));
console.log(checkSign(20));
console.log(checkSign(0));

// VAR vs LET
let catName = "Quincy";
let quote;

//let catName = "Beau"; //valid with var, not valid with let

function catTalk() {
	"use strict"; //catches common coding mistakes and invalid actions

	catName = "Oliver";
	quote = catName = " says Meow!";
}

catTalk();

//scope of let is limited to function or block statement it was declared
function checkScope() {
	"use strict";
	let i = "function scope";
	if (true) {
		let i = "block scope"; //using var here would make i block scope in this block AND the function body
		console.log("scope of i is: ", i);
	}
	console.log("scope of i is: ", i);
	return i;
}

checkScope();
