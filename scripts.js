// Generate a random number between 1 and 100
const correctNumber = Math.floor(Math.random() * 50) + 1;

function checkGuess() {
    // Get the player's guess
    const guess = document.getElementById('guess').value;

    // Check if the guess is correct
    if (guess == correctNumber) {
        // Display a message saying the guess was correct
        document.getElementById('result').innerHTML = 'You guessed correctly!';

        // Disable the form
        document.getElementById('guess').disabled = true;
        document.querySelector('button').disabled = true;
    } else if (guess > correctNumber) {
        // Display a message saying the guess was too high
        document.getElementById('result').innerHTML = 'Your guess was too high';
    } else {
        // Display a message saying the guess was too low
        document.getElementById('result').innerHTML = 'Your guess was too low';
    }
}