//TEMPLATE LITERALS MAKE BUILDING COMPLEX STRINGS EASIER
const person = {
	name: "Zodiac Hasbro",
	age: 56
};

//make template literals with ``
//also makes it easy to make multi-line strings
//now we can use variables within the string, directly

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["id-blacklist", "no-dup-keys"]
};

//makeList function should create a list based on passed in array
function makeList(arr) {
	const resultDisplayArray = [];

	for (let i=0; i < arr.length; i++) {
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}<li>`);
	}

	return resultDisplayArray;
}

/*
	makeList(result.failure) should return:
	[ `<li class="text-warning">no-var</li>`,
	  `<li class="text-warning">var-on-top</li>`,
		`<li class="text-warning">linebreak</li>` ]
*/

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//ES6 added support for easily creating literals
//JS knows it will return these objects with these var names
const createPerson = (name, age, gender) => ( { name, age, gender })
//old method
	// return {
	// 	name: name,
	// 	age: age,
	// 	gender: gender
	// };

console.log(createPerson("Zodiac Hasbro", 56, "male"));
