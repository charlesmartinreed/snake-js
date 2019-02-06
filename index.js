//objects can contain functions
const bicycle = {
	gear: 2,
	setGear(newGear) {
		"use strict";
		this.gear = newGear;
	}
}

bicycle.setGear(3);
console.log(bicycle.gear);

//ES6 can create objects using class keyword

//old way of creating objects, using new
var spaceShuttle = function(targetPlanet) {
	this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle('Jupiter'); //create new Object

console.log(zeus.targetPlanet)

//new way of creating objects, using class and constructor
class ES6SpaceShuttle {
	constructor(targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
}
var artemis = new ES6SpaceShuttle('Mercury');
console.log(artemis.targetPlanet);

function makeClass() {
	class Vegetable {
		constructor(name) {
			this.name = name;
		}
	}

	return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); //carrot
