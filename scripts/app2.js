//model object which is the state of the game
/*numShip - number of ships in the game, shipsSunk - keeps the current number of ships that have been sunk by player
shipLength - number of locations in each ship which is 3*/
var model = {
	boardSize: 7,
	numShip: 3, 
	shipLength: 3,
	shipsSunk: 0,
	ships: [{locations:["06","16","26"], hits:["","",""]},
		   {locations:["24","34","44"], hits:["","",""]},
		   {locations:["10","11","12"], hits:["","",""]}],
	fire function(guess) {
		for (var i = 0; i < this.numShip; i++) {
			var ship = this.ships[i];
			var locations = ship.locations;
			var index = locations.indexOf(guess);
			if (index >= 0) {
				console.log("hit");
			}
		}
	}	   

};




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