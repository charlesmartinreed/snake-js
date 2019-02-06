//GETTERS AND SETTERS
class Book {
	constructor(author) {
		this._author = author; //private variable
	}

	//GETTER - return the private variable to the user without giving access to alter it
	get writer() {
		return this._author;
	}

	//SETTER - allows setting of private variable without exposing its current contents. Can invoke calculations or just outright overwrite it
	set writer(updatedAuthor) {
		this._author = updatedAuthor;
	}
}

//create thermostat class, make a getter and setter. Accept F, return temp in celsius
function makeClass() {
	class Thermostat {
		constructor(temperature) { //F
			//convert to C
			this._temperature = 5/9 * (temperature - 32); //this means only accessible in class, _ means private variable
		}

		get temperature() {
			//let celsius = (this._temperature - 32) * (5/9);
			return this._temperature;
		}

		set temperature(updatedTemp) {
			this._temperature = updatedTemp;
		}
	}

	return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); //this will be converted to C - 24.44444 C
let temp = thermos.temperature; //uses getter
//thermos.temperature = 26; //setter
//temp = thermos.temperature;
console.log(temp);
