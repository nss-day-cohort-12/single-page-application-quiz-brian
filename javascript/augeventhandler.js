var Icon = (function (oldIcon) {
	var chosenCard = document.getElementById("cards");
	var userInput = document.getElementById("user-input");
	var button = document.getElementById("reset");

	oldIcon.activateEvents = function(event) {

// When you click on car elements, change the width of the border to a higher value and change background color of card
		chosenCard.addEventListener("click", function (event) {
			console.log("hello", event.target);
			if (event.target.classname.indexOf("cards") >= 0) {
				chosenCard = event.target;
			} else {
				chosenCard = event.target.parentNode;
			}
		});

	

			// document.body.classList.toggle("card-change");


// Event Listener for Reset of border and background to original values
		button.addEventListener("click", function(event) {
			console.log("btn-click");
			//Call function from augobject
		});

	};

// also on click of car elements clear value of text input and put cursor in the text input (.focus()).

// When you type in text input - description of the currently 
	return oldIcon;
})(Icon);

Icon.activateEvents();
