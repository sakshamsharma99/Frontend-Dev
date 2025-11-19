// Step 1: Declare variables of different data types
let userName = "Pratik";            // string
let age = 20;                       // number
let isLoggedIn = true;              // boolean
let skills = ["HTML", "CSS", "JS"]; // array
let profile = { city: "Delhi", marks: 85 }; // object
let emptyValue = null;              // null
let notAssigned;                    // undefined

// Step 2: Create a summary list
// For arrays, typeof gives "object", so use Array.isArray()
let summary = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "Age",
        value: age,
        type: typeof age
    },
    {
        label: "Logged In",
        value: isLoggedIn,
        type: typeof isLoggedIn
    },
    {
        label: "Skills",
        value: skills,
        type: Array.isArray(skills) ? "array" : typeof skills
    },
    {
        label: "Profile",
        value: profile,
        type: typeof profile
    },
    {
        label: "Empty Value",
        value: emptyValue,
        type: typeof emptyValue 
    },
    {
        label: "Not Assigned",
        value: notAssigned,
        type: typeof notAssigned
    }
];

// Step 3: Print all in a formatted table
console.table(summary);
