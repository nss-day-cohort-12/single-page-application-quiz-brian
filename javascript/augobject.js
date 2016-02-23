var Icon = (function(oldIcon) {

	// Change thickness of border and change background color
	// Supposed to take two arguments.  Why not 3 with border change?
	oldIcon.changeCard = function(card) {
		var cards = oldIcon.domCards();
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("card-change");
		}
		card.classList.add("card-change");
	};

	oldIcon.infuseText = function(card) {
		var cards = oldIcon.domCards();
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("description");
		}
		card.classList.add("description");
	};  

	return oldIcon;

	// Rest border thickness and background color to original values
	// Reset button
	// function cardReset () {

	// };
		

})(Icon);