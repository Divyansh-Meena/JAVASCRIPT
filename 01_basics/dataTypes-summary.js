// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bignumber = 3456789456123n



// Reference (non-primitive)

// Array, Objects, 

const heros = ["shaktiman", "naagraj", "dogo"];
let myObj = {
    name: "Divyansh",
    age: 21,

}

const myFunction = function() {
    console.log("Hello world");

}

console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof bignumber)
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof anotherId)


// *****************************************************************

// Stack (primitive) and Heap (non-primitive)

let myYoutubename = "Divyanshyoutube.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "divyansh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);