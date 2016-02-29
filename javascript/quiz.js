/**** FIRST IIFE ****/
var Icon = (function() {
	// Private variable (array)
	var iconCarArray = [];

	return {
		loadCar: function (callback) { // Key value pair that is a function
			// Create XHR to load inventory
			var iconCarLoader = new XMLHttpRequest();
			// Listen for load event and execute anonymous callback
			iconCarLoader.addEventListener("load", function () {
				// Sets the value of the private variable
				var iconCarData = JSON.parse(this.responseText); // Converts string into an object
				iconCarArray = iconCarData.cars;

				callback(iconCarArray);

			});
			// What to do, get the JSON file data
			iconCarLoader.open("Get", "inventory.json");
			// Starts process to go grab the file
			iconCarLoader.send();			
		}
	}
})();
















