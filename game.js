// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = prompt("Guess a number");

// Check if guess is right
// Added Number() here so that the guess and therefore the secretNumber is identified as a number, not a string
if(Number(guess) === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

// Otherwise, you got it wrong
else {
	alert("Wrong!")
}