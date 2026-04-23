// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// true, {}, [], function(){}, 1, -1, " ", "0", "false", Infinity, -Infinity, BigInt 1n 

// const Emptyobj = {}
// if(Object.keys(Emptyobj).length === 0){
//     console.log("object is empty");
// }

// Nullish Coalescibng Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 5
console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("greater than or equal to 80")