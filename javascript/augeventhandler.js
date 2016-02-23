var Icon = (function (oldIcon) {
	var containerEl = document.getElementById("container");
	var inputEl = document.getElementById("user-input");
	var buttonEl = document.getElementById("reset");
	/***** Card Element Function - helper function *****/
	oldIcon.domCards = function () {
	  var cards = document.getElementsByClassName("cards")
	  return cards
	};
	// When you click on car elements, change the width of the border to a higher value and change background color of card
	oldIcon.activateEvents = function(event) {
		var cards = oldIcon.domCards();

		for (var i = 0; i < cards.length; i++) {			
			console.log("card", cards[i]);
			cards[i].addEventListener("click", function(event) {
				var card = event.currentTarget;
				oldIcon.changeCard(card);
				// also on click of car elements clear value of text input and put cursor in the text input (.focus()).
				inputEl.focus();
				inputEl.value = "";
				oldIcon.infuseText(card);
			});
		}
				
		// Event Listener for Reset of border and background to original values
		buttonEl.addEventListener("click", function(event) {
			for (var i = 0; i < cards.length; i++) {
				cards[i].classList.remove("card-change");
			}
			
		});
		// When you type in text input - description of the currently selected car should be bound to what you are typing in and match it exactly 
		inputEl.addEventListener("keyup", function(event) {
			var inputText = event.target.value;
			var newDescription = document.getElementsByClassName("description");
			newDescription[0].childNodes[6].innerHTML = inputText;	
		});

	};


	return oldIcon;
})(Icon);

