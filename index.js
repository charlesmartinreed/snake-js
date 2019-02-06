/*
CARD COUNTING FUNC

LOW CARD = COUNT++
HIGH CARD = COUNT--
MIDDLE VALUE CARD = COUNT STAYS SAME

*/

var count = 0;

function cc(card) {
	//when count positive, player should bet high. when negative, player should bet low.
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;
	}
	//var holdOrBet = "Hold";

//ternary
	// if (count > 0) {
	// 	holdOrBet = "Bet"
	// }

	var holdOrBet = count > 0 ? "Bet" : "Hold";
	return count + " " + holdOrBet;
}

cc(2); cc("K"); cc(7); cc("3"); cc("4"); //-2 Hold
console.log(cc(4)) //-1 Hold
