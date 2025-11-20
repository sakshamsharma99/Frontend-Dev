//1.let + "use strict"
"use strict";

function generatePyramid(limit = 4) {
  // Outer loop - rows
  for (let i = 1; i <= limit; i++) {
    let row = "";

    // Inner loop - build stars for this row
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }

    console.log(row.trim());
  }
}

// Default run (produces 4 rows as in prompt)
generatePyramid(); 

// Example: custom limit
// generatePyramid(5);

// 2.Replace let with var
"use strict";

function generatePyramidVar(limit = 4) {
  for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
  console.log("after loops i =", i, "j =", j);
}

generatePyramidVar();

//3.
"use strict";

// Ask user for limit – if empty or invalid, default = 5
// let limit = prompt("Enter number of rows:", 5);
// limit = parseInt(limit);

// if (isNaN(limit) || limit <= 0) {
//     limit = 5;
// }

// for (let i = 1; i <= limit; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }


//4.
"use strict";

let limit = prompt("Enter number of rows:", 5);
limit = parseInt(limit);

if (isNaN(limit) || limit <= 0) {
    limit = 5;
}

let result = "";

for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= i; j++) {
        result += "* ";
    }
    result += "\n";
}

alert(result);
