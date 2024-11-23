// Get elements
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
// Function to handle the guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    // Validate the input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
        message.style.color = 'red';
        return;
    }
    // Compare guess to the random number
    if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'orange';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'orange';
    } else {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
        submitButton.disabled = true; // Disable the button after correct guess
    }
    // Update attempt counter
    attemptsDisplay.textContent = attempts;
}
// Add event listener to submit button
submitButton.addEventListener('click', checkGuess);
// Optional: Allow Enter key to submit guess
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
