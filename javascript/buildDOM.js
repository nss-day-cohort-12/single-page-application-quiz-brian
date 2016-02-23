function buildDOM (carArray) {
	var carString = "";
	var cardContainer = document.getElementById("container");


	for (var i = 0; i < carArray.length; i++) {
		if ((i + 1) % 3 === 0) {
			carString += `<div class='row'>`;
		}
			carString += `<div class="col-md-4 cards" style="border: 10px groove ${carArray[i].color}"><h3>${carArray[i].make}</h3><p>${carArray[i].model}</p><p>${carArray[i].year}</p><p>${carArray[i].price}</p><p>${carArray[i].color}</p><p>${carArray[i].purchased}</p><p class="descrip">${carArray[i].description}</p></div></div>`;
	}

	cardContainer.innerHTML = carString;
	Icon.activateEvents();
};

Icon.loadCar(buildDOM);




