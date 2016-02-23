var Icon = (function(oldIcon) {

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

})(Icon);



