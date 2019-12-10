// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = prompt("Guess a number");

// Check if guess is right
if(Number(guess) === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

// Otherwise, check if higher
else {
	if(Number(guess) > secretNumber) {
		alert("NOPE, LOWER!")
	}
}

// Otherwise, check if lower
else {
	if(Number(guess) < secretNumber) {
		alert("NOPE, HIGHER!")
	}
}