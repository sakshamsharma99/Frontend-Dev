function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}
outer();

// 1) Predict & explain the output
// undefined
// undefined

//2.  How hoisting creates separate memory contexts?
// At runtime JavaScript creates an activation record (variable environment) for each function before executing its body.

// For outer:

// It creates an outer environment with a count variable (declared by var count) and a binding inner that points to the function.

// Initially outer.count === undefined (because only declaration is hoisted).

// When inner is called:

// A new environment is created for inner with its own count variable (from var count inside inner). inner.count === undefined initially.

// Because inner has its own count, it shadows (hides) outer.count inside the inner function body.

// Thus we have two separate memory contexts:

// outer environment: has count (becomes 5 only after assignment line).

// inner environment: has its own count (becomes 10 only after assignment line).

// 3. Convert inner to an arrow and note behavior changes
function outer() {
  console.log(count);
  var count = 5;

  const inner = () => {
    console.log(count);
    var count = 10;
  };

  inner();
}
outer();

// 4.Debug session and call stack flow
function outer() {
  debugger;                // pause at start of outer
  console.log('outer before assign:', count);
  var count = 5;
  debugger;                // pause after assignment in outer

  function inner() {
    debugger;              // pause at start of inner
    console.log('inner before assign:', count);
    var count = 10;
    debugger;              // after assignment in inner
  }

  inner();
  debugger;                // after inner returns
}
outer();
