let number = 40, guess = 0;
do {
    guess = parseInt(prompt("Guess the number (Enter 0 to quit):"));
    
    if (guess === 0) {
        alert("Game over! Goodbye!");
        break; // Exit the loop if the user enters 0
    }
    
    if (guess === number) {
        alert("Winner! You guessed the correct number.");
        break; // Exit the loop when the user guesses correctly
    } else {
        alert("You are not inputting the correct number. Try again!");
    }
} while (guess !== 0);
