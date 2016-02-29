function buildDOM (carArray) {
	var carString = "";
	var cardContainer = document.getElementById("container");

	for (var i = 0; i < carArray.length; i++) {
		if (i % 3 === 0) { // Math for the start of the row
			carString += `<div class='row'>`;
		}	
		carString += `<div class="col-md-4 cards" style="border: 5px groove ${carArray[i].color}"><h3>${carArray[i].make}</h3><p>${carArray[i].model}</p><p>${carArray[i].year}</p><p>${carArray[i].price}</p><p>${carArray[i].color}</p><p>${carArray[i].purchased}</p><p class="descrip">${carArray[i].description}</p></div>`;		
		if ((i + 1) % 3 === 0) { // Math for the end of the row
			carString += `</div>`;
		}
	}

	cardContainer.innerHTML = carString;
	// Call to have event listeners available when page loads
	Icon.activateEvents();
};
// Calling loadCar function with buildDOM as argument
Icon.loadCar(buildDOM); 



