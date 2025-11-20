// 1. Why does this throw an error under strict mode?

// In strict mode, JavaScript does not allow creation of variables without declaration.

// The statement:

// greeting = "Welcome";

"use strict";
function showMessage() {
    let greeting = "Welcome";   // properly declared
    console.log(greeting);
}
showMessage();
// greeting is now declared using let, which restricts its scope inside the function only.

// Before fixing:

// Assigning greeting without declaration created or attempted to create a global variable (which strict mode disallows).

// After fixing:

// Variable is local to the function, making the code safer and preventing accidental pollution of the global scope.

// 3. Debugger – Watch Variable and Call Stack in VS Code

"use strict";
function showMessage() {

    debugger;   // execution pauses here

    let greeting = "Welcome";
    console.log(greeting);
}
showMessage();
// How to test in VS Code

// Open the file and run it using Run → Start Debugging (Node.js).

// Execution will pause at the debugger line.

// In the WATCH panel, add:

// greeting

// Observe:

// Before declaration: greeting → not defined

// After execution of the next line: greeting = "Welcome"

// Open CALL STACK panel:

// You will see something like:

// showMessage()
// <main file>
