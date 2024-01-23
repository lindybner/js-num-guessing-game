/*
    Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
*/

// var
const msgPrompt = `Guess a number between 0 and 10 inclusive.`;
const msgSuccess = `Good Work`;
const msgFail = `Not matched`;

let num = (num = Math.ceil(Math.random() * 10));
console.log(num);

let guess = prompt(msgPrompt);

if (guess === num) {
  alert(msgSuccess);
} else {
  alert(msgFail);
}
