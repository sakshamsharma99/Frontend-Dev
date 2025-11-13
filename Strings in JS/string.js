//Primitive DT, Object DT
//String is immutable

let a = "Hii"
let b = 'Hii'
let c = Hii
let g = new String("HII")


let d = a + " " + b
let e = a.concat(b)
let f = `Hii${b}`
console.log(f)


//Inbuilt methods

// 1. Length

b.length;
"Hello".length;

//2. toUpperCase

b.toUpperCase();
"Hello".toUpperCase();

//3.toLowerCase

b.toLowerCase();
"HELLO".toLowerCase();

//trim
b.trim();

//includes

console.log("Hello".includes('He'));

//lastIndexOf

console.log("Hello".lastIndexOf('l'));

//Slice      can take negative index
console.log("Hello".slice(1, 4))

//substring    can take only positive index
console.log("Hello".substring(1, 4))

//split
console.log("Hello".split(' '))