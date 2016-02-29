/**** SECOND IIFE ****/
var Icon = (function (oldIcon) {
	var containerEl = document.getElementById("container");
	var inputEl = document.getElementById("user-input");
	var buttonEl = document.getElementById("reset");
	/***** Card Element Function - helper function *****/
	oldIcon.domCards = function () {
	  var cards = document.getElementsByClassName("cards")
	  return cards
	};
	/***** Event Listeners *****/
	oldIcon.activateEvents = function(event) {
		var cards = oldIcon.domCards();
		// Event Listener for card click functions
		for (var i = 0; i < cards.length; i++) {			
			console.log("card", cards[i]);
			cards[i].addEventListener("click", function(event) {
				var card = event.currentTarget;
				oldIcon.changeCard(card);
				inputEl.focus();
				inputEl.value = "";
				oldIcon.infuseText(card);
			});
		}
				
		// Event Listener for RESET of border and background to original values
		buttonEl.addEventListener("click", function(event) {
			for (var i = 0; i < cards.length; i++) {
				cards[i].classList.remove("card-change");
			}
			
		});
		// Event Listener to bind keystroke with DOM element
		inputEl.addEventListener("keyup", function(event) {
			var inputText = event.target.value;
			var newDescription = document.getElementsByClassName("description");
			newDescription[0].childNodes[6].innerHTML = inputText;	
		});

	};

	return oldIcon;
	
})(Icon);

