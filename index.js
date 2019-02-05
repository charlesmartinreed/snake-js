console.log("Hello world, from Javascript!")

//this is an inline comment

/* This is a
multi-line comment.*/

/*
==========DATA TYPES AND VARIABLES==========
1. undefined = hasn't been set yet
2. null = set to be nothing
3. boolean = true or false
4. string
5. symbol = immutable, unique, primitive value
6. number
7. object = can store many different key/value pairs

variable names in JS are case sensitive.
*/

var myName = "Charles"; //can be used throughout entire program
myName = "Tyson";

let ourName = "Aspira"; //only scoped locally, where it was a defined
const pi = 3.14; //never changing value

var a; //merely creating the variable
console.log(a);
var b = 2; //creating and assigning in one step
a = 7;
var c = null;

console.log(a);
console.log(b);
console.log(c);

//Quotes within Quotes and escaping
var oldStr = "\"Escaping\" is done with the \\ character.";
var myStr = '"This is valid"';
var myStr2 = `'This', too is "valid"`;
var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(oldStr);
console.log(myStr);
console.log(myStr2);
console.log(myStr3);

//Working with strings
var countable = "Count this";
console.log(countable.length);

var firstChar = countable[0];
console.log(firstChar);

var lastChar = countable[countable.length - 1];
console.log(lastChar);

var myStr = "Jello World";
//myStr[0] = "H"; //This doesn't work because STRINGS ARE IMMUTABLE
