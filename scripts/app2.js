//model object which is the state of the game


//view object which updates the display
var view = {
	displayMessage: function(message) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = message;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");

	},

	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");

	}
};


//to test view object methods
/*view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Is this working?");*/




//controller object which handles the user's input