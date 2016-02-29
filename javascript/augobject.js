/**** THIRD IIFE ****/
var Icon = (function(oldIcon) {
	// For both functions the class change is isolated to the click event, by making sure the class is cleared on all elements and then added to the one clicked
	// Function for changing cards appearance when clicked
	oldIcon.changeCard = function(card) {
		var cards = oldIcon.domCards();
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("card-change");
		}
		card.classList.add("card-change");
	};
	// Function for text replacement of car description
	oldIcon.infuseText = function(card) {
		var cards = oldIcon.domCards();
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("description");
		}
		card.classList.add("description");
	};  

	return oldIcon;

})(Icon);



