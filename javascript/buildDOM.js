function buildDOM (carArray) {
	var carString = "";
	var cardContainer = document.getElementById("container");


	carString += `<div class='row'>`;
	for (var i = 0; i < carArray.length; i++) {
		carString += `<div class="col-md-4 cards" style="border: 10px groove ${carArray[i].color}"><h3>${carArray[i].make}</h3><p>${carArray[i].model}</p><p>${carArray[i].year}</p><p>${carArray[i].price}</p><p>${carArray[i].color}</p><p>${carArray[i].purchased}</p><p class="descrip">${carArray[i].description}</p></div>`;
	}
	carString += `</div>`;

	// Would like to try and split color names in the dom
	// function colorSplitter (carColor) {
	// 	carArray.color.split();
	// };

	cardContainer.innerHTML = carString;
};

Icon.loadCar(buildDOM);



