// Guessing the user's number

function guessNumber() {
    let min = 0;
    let max = 100;
    let guess;
    
    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        let response = prompt(`Is your number ${guess}? (Enter: =, >, <)`);
        
        if (response === "=") {
            alert(`Great! Your number is ${guess}.`);
            return;
        } else if (response === ">") {
            min = guess + 1; // Search the higher range
        } else if (response === "<") {
            max = guess - 1; // Search the lower range
        } else {
            alert("Invalid input! Please enter '=', '>' or '<'.");
        }
    }
    
    alert("Something went wrong! Are you sure you followed the rules?");
}

// Start the game
guessNumber();
