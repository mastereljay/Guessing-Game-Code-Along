// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var stringGuess = prompt("Guess a number")
var guess = Number(stringGuess);

// Check if guess is right
if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

// Otherwise, check if higher
else if(guess > secretNumber) {
		alert("NOPE, LOWER!");
	}

// Otherwise, check if lower
else {
		alert("NOPE, HIGHER!");
	}
	
