// IF-ELSE challenge question
function checkNumber(number) {
	if (number < 5) {
		return "Tiny";
	} else if (number < 10) {
		return "Small";
	} else if (number < 15) {
		return "Medium";
	} else if (number < 20) {
		return "Large";
	} else {
		return "Huge";
	}
}

console.log(checkNumber(20));

//write a function to return golf nickname given a stroke count
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes) {
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else if (strokes >= par + 3) {
		return names[6];
	}
}

console.log(golfScore(5, 4));
