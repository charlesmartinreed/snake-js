// BASIC FUNCTION
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result = "The " + myAdjective + " "  + myNoun + " " + myVerb + " " + myAdverb + "."


	return result
}

//SCOPE WITH FUNCTIONS
var myGlobal = 10; //set outside of function, can be seen within functions

function fun1() {
	oopsGlobal = 5; //because the var keyword isn't here, this becomes global! Yikes. I suppose this is why strict mode was created?
}

function fun2() {
	var output = "";

	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}

	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}

	console.log(output);
}

fun1();
fun2();

//LOCAL VS GLOBAL SCOPE
var outerWear = "T-Shirt";

function myOutfit() {
	var outerWear = "sweater"
	return outerWear; //using global variable gives T-Shirt, but as soon as we define a variable with the same name, it takes precdence and "sweater is logged".
}

console.log(myOutfit());
console.log(outerWear);

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//RETURNING FROM A FUNCTION
function minusSeven(num) {
	return num - 7;
}

var sum = 0;
console.log(minusSeven(10));

function addFive() {
	sum += 5; // when we log this func, it returns "undefined" because it doesn't return anything.
}
console.log(addFive());

var changed = 0;
function change(num) {
	return (num + 5) / 3;
}
changed = change(10) //stores the returned value
console.log(changed) //should be 5

//BASIC ARRAYS
var ourArray = ["John", 23];

//NESTED ARRAYS
var myArray = [["the universe", 42], ["everything else", 69]];
console.log(myArray[0]); //[the universe, 42]
console.log(myArray[0][1]);

//ARRAYS ARE NOT IMMUTABLE BY DEFAULT
var mutableArray = [19, 64, 83];
mutableArray[1] = 49;
// console.log(mutableArray);

//PUSH, POP
mutableArray.push([61, 27, 105]);
// console.log(mutableArray);

var popArray = [1, 2, 3]; //becomes [1, 2] are pop() operation
var removedFromArray = popArray.pop(); //3
console.log(popArray)

//SHIFT and UNSHIFT
//shift removes the first element
var shiftArray = [4, 5, 6]; //becomes [5, 6]
var shiftedFromArray = shiftArray.shift(); //4
console.log(shiftArray)

//unshift adds element to beginning of array
var unshiftArray = ["b", "c", "d"];
unshiftArray.unshift("a");
console.log(unshiftArray);
