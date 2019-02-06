//DO-WHILE - always runs at least once BEFORE checking conditional
var myArray = [];
var i = 10;

do {
	myArray.push(i);
	i++;
} while (i < 5);

console.log(i, myArray); //since i is never less than 5, i is only incremented once.

// ===========================================================================

// PROFILE LOOKUP CHALLENGE
var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Laine",
		"number": "1234567890",
		"likes": ["Pizza", "Coding", "Brownie Poitns"]
	},
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "1525938182",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	}
];

function lookupProfile(name, prop) {
	//user passes in a name and prop, we return the value
	for (var i = 0; i < contacts.length; i++) {
		//check if the name exists
		if (contacts[i].firstName === name) {
			return contacts[i][prop] || "No such property"
		} else {
			return "No such contact"
		}
	}
}

var data = lookupProfile("Akira", "dislikes");
console.log(data);
