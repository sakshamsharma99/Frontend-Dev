// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// List of operators
let operators = ['+', '-', '*', '/'];

// Pick a random operator
let operator = operators[Math.floor(Math.random() * operators.length)];

// Variable to store correct answer
let correctAnswer;

// Calculate answer using switch
switch (operator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = (num1 / num2).toFixed(2); // rounded to 2 decimals
        break;
    default:
        correctAnswer = "Invalid Operator";
}

// Display question and answer
console.log(`Question: ${num1} ${operator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
