# JavaScript Number Guessing Game

Exercise: Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

## Code Structure

- The JavaScript logic is implemented in the `script.js` file.
- The program uses a `do-while` loop to continuously prompt the user for guesses until the correct number is guessed.
- Input validation is included to ensure the user enters a valid number.

## Techniques Used

1. **Random Number Generation:**
   Utilized `Math.random()` to generate a random integer between 1 and 10.

2. **User Input and Validation:**
   Obtained user input with `prompt` and validated using `parseInt` with `isNaN`.

3. **Looping Structure:**
   Implemented a `do-while` loop for continuous user input until correct.

4. **Conditional Statements:**
   Utilized `if` and `else` for comparing user input and providing feedback.
