alert("Test your brain, Gess the Number!")

// here i creat a random number betwen 1 and 10;
const randomNumber = Math.floor(Math.random() * 10) + 1;
// the Math.floor helps to round off the number to its lower number 

// Initialize variables
let attempts = 0;
const maxAttempts = 4;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    //  number of attempts  
    attempts++;

    // Check if the guess is correct
    if (guess === randomNumber) {
        showMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
        disableInputAndButton();
    } else if (attempts === maxAttempts) {
        showMessage(`Game Over! The number was ${randomNumber}.`);
        disableInputAndButton();
    } else if (guess < randomNumber) {
        showMessage('Try a higher number.');
        guessInput.value = " "
    } else if (guess > randomNumber) {
        showMessage('Try a lower number.');
        guessInput.value = " "
    }
        
    // guessInput.value = '';
}

function showMessage(message) {
    // Display the message
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;  
}

function disableInputAndButton() {
    // Disable the input field and submit button
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');
    guessInput.disabled = true;
    submitButton.disabled = true;
}


console.log(x)
let x = 33