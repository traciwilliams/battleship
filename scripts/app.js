window.onload = function() {
	console.log("battleship loaded?")
}


/*Psuedocode
need 3 variables to place the ship (the ship spans 3 spaces horizontally or vertically)
location1, location2, location3
guess
hit
game results

with a prompt ask the user for a guesss between 0 - 6
check to make sure the guess if valid, i.e. a number between 0-6, not a letter or word


if the guess is equal to a location space then
increase guess by one and hits by one
alert "you have a hit"

if the guess is not equal to location space then
increase guess by one and misses by one
alert "you have a miss"

if hits are equal to 3
alert "you sunk my battleship"


if misses are equal to 3
alert "game over"

*/

//declare three variables
var location1 = 2; //location cell of ship
var location2 = 3; //location cell of ship
var location3 = 4; //location cell of ship


var currentGuess; //undefined for now until a guess is made
var guesses = 0;
var hits = 0;
//var misses = 0; dont need this...just want to know the hits, assume not a hit it's a miss
var isSunk = false; //keeps track on whether the ship is sunk or not, will be set to true when the ship is sunk

//now the loop


while (isSunk == false) {

	currentGuess = prompt("enter a number between 0 - 6"); 

	if currentGuess < 0 || currentGuess > 6 {
		alert("please enter valid number")
	} else {
		guesses ++;
	}

}








