/**** FIRST IIFE ****/

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
















