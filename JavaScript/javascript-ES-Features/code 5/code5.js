// ① console.log(score);

// score is declared with var.

// During hoisting:

// var score → created with value = undefined

// ② announce();

// announce is a function declaration.

// Fully available during hoisting.

// Prints:

// Game started

// ③ var score = 50;

// Updates score from undefined → 50.

// ④ let status = "ready";

// let is hoisted but left uninitialized in TDZ.

// It only becomes available once execution reaches this line.

// ⑤ startGame();

// Function is declared (hoisted), so it can be called.

// 2️. Fixed & Clean Version

"use strict";

// function announce() {
//     console.log("Game started");
// }

// function startGame() {
//     console.log(status);
// }

// var score = 50;        // var hoisted with undefined
// let status = "ready";  // declared normally

// console.log(score); 
// announce();
// startGame();


//3.Rewritten Using Arrow Functions
"use strict";

const announce = () => {
    console.log("Game started");
};

const startGame = () => {
    console.log(status);
};

var score = 50;
let status = "ready";

console.log(score);
announce();
startGame();
