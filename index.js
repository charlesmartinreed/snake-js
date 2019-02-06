//BUILDING OBJECTS
//properties can be any data type in Javascript.
var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["Everything!"]
};

var testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};

//access values with either dot-notation or bracket-notation.
//bracket-notation required if the value name has a space.
console.log(ourDog.name);
ourDog.name = "Happy Camper";
console.log(ourDog.name);

ourDog.human = "Charles";
console.log(ourDog["human"]);
console.log(ourDog["legs"]);
console.log(testObj["an entree"]);

//variables can also be used to search values in an object
var players = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16;
var player = players[playerNumber];
console.log(player) //gives us Montana

// USE THE DELETE keyword to remove elements from an object
delete players[12];
console.log(JSON.stringify(players));

//CHECK FOR OBJECT PROPERTIES WITH hasOwnProperty method
var newObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp) {
	if (newObj.hasOwnProperty(checkProp)) { //hasOwnProperty returns true or false
		return newObj[checkProp];
	} else {
		return "Not Found";
	}
}

console.log(checkObj("pet"));
