//switch uses STRICT EQUALITY CHECKING, ===
function caseInSwitch(val) {
	var answer = "";
	switch (val) {
			case 1:
				answer = "alpha";
				break;
			case 2:
				answer = "beta";
				break;
			case 3:
				answer = "gamma";
				break;
			case 4:·
				answer = "delta";
				break;
			default:
				answer = "Invalid selection";
				break;
	}

	return answer;
}

console.log(caseInSwitch(5));

function sequentialSizes(val) {
	var answer = "";
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}
	return answer;
}

console.log(sequentialSizes(8));

function isLess(a, b) {
	return a < b
}

console.log(isLess(20, 5));

//return early from a function
function abTest(a, b) {
	if (a < 0 || b < 0) {
		return undefined;
	}
}
console.log(abTest(-2, 2));
