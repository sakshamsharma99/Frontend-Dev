/*
Predicted Output Order:
1. Script start        (synchronous)
2. Script end          (synchronous)
3. Promise callback    (microtask)
4. Timeout callback    (macrotask)

Explanation:
- JavaScript runs synchronous code first.
- Then the Event Loop processes microtasks (Promise callbacks).
- After all microtasks are done, macrotasks like setTimeout are executed.
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");
