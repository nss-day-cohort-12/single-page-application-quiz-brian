/**** BUILD FIRST IIFE ****/
// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).

var Icon = (function() {
	var iconCarArray = [];

	return {
		loadCar: function (callback) {
			var iconCarLoader = new XMLHttpRequest();

			iconCarLoader.addEventListener("load", function () {
				var iconCarData = JSON.parse(this.responseText);
				iconCarArray = iconCarData.cars;

				callback(iconCarArray);

			});
			iconCarLoader.open("Get", "inventory.json");
			iconCarLoader.send();			
		},

		getCar: function () {
			return iconCarArray;
		}
	}
})();

//console.log("Icon: ", Icon);















