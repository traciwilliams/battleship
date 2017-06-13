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

//declare three variables with fixed locations
//var location1 = 2; //location cell of ship
//var location2 = 3; //location cell of ship
//var location3 = 4; //location cell of ship


//declare three variables with random locations
var randomLocationNumber = Math.floor(Math.random() * 5);

var location1 = randomLocationNumber;
var location2 = randomLocationNumber + 1;
var location3 = randomLocationNumber + 1;





var currentGuess; //undefined for now until a guess is made
var guesses = 0;
var hits = 0;
//var misses = 0; dont need this...just want to know the hits, assume not a hit it's a miss
var isSunk = false; //keeps track on whether the ship is sunk or not, will be set to true when the ship is sunk

var tally = document.getElementById("tally");
var greeting = document.getElementById("greeting");
var numberOfGuesses = document.getElementById("numberOfGuesses");
var numberOfHits = document.getElementById("numberOfHits");
//var name;
//now the loop

var name = prompt("hello, please enter your name");
/*
after working thru this...made variables...made them global
then used a while loop and while the variable isSunk is false we are asking the user for a number between 0 - 6
before we count the guess as valid we must make sure it's a valid number between 0 - 6
if its valid then we are going to count it as a guess and increment out guess variable by 1

after the guess is validated we are going to check it against the location1, location2, location3
if the guess is equal to any of the locations mentioned then we will count it as a hit and increment hit by 1

otherwise if the guess is not equal to the locations then we will count it as a failed guess and will ask the user to try again

when the hits variable is equal to 3 then we will make the isSunk variable true (which will cancel the while loop)
and alert the user that the game is over and the battleship has been sunk

then the results will be displayed for the user which indicates the number of guess and the accuracy percentage of the guesses

*/


while (isSunk == false) {
	greeting.innerHTML = response;
	currentGuess = prompt("enter a number between 0 - 6"); 

	if (currentGuess < 0 || currentGuess > 6) {
		alert("please enter valid number");
	} else {
		guesses = guesses + 1;
		
		

		if (currentGuess == location1 || currentGuess == location2 || currentGuess == location3) {
			//alert("you have a hit");
			hits = hits + 1;
			alert("HIT! The number of hits you have is " + hits + " and the number of guesses is " + guesses);
			tally.innerHTML = ("you made " + guesses + " guesses and " + hits + " hits");
			
			numberOfHits.innerHTML = hits;
			numberOfGuesses.innerHTML = guesses;

			if (hits == 3) {
				isSunk = true;
				alert("Game over!" + name + " You sunk my battleship!");

			} 

			} else {
				alert("miss, try again");
			}
		}		

};

var results = name +  " you took " + guesses + " guesses, which means your shooting accuracy was " + (3/guesses);

alert(results);








