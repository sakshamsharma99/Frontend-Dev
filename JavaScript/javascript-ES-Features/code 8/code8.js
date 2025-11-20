//without strict
function demo1(a, a) {
    total1 = 10;
    delete total1;
}
demo1(5, 10);


//with strict
"use strict";

function demo(a, b) {
    let total = 10;
    console.log("Total =", total);

    // delete is allowed only for object properties
    const data = { value: 20 };
    delete data.value; // valid
}

demo(5, 10);
