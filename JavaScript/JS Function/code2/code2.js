function applyOperation(numbers, operation) {
return numbers.map(operation);
}

const doubled = applyOperation([1,2,3,4], n => n * 2);
const squared = applyOperation([1,2,3,4], n => n * 2);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
