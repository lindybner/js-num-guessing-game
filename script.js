/*
    Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
*/

const msgPrompt = `Guess a number between 1 and 10 inclusive.`;
const msgSuccess = `Good Work!`;
const msgFail = `Not matched`;

let num = Math.ceil(Math.random() * 10);
console.log(num);

let guess;

do {
  guess = parseInt(prompt(msgPrompt));

  if (isNaN(guess)) {
    alert(`Please enter a valid number.`);
  } else {
    if (guess === num) {
      alert(msgSuccess);
    } else {
      alert(msgFail);
    }
  }
} while (guess !== num);
