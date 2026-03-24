const score = 400
//console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.5966

//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//********************* Maths ****************/

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.53));
// console.log(Math.round(4.37));
// console.log(Math.ceil(7.4));
// console.log(Math.floor(7.8));
// console.log(Math.min(4,7,3,5,8));
// console.log(Math.max(4,7,3,5,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);  // one add to avoid 0 case because if random comes 0 the after * 10 the answer became 0. 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ((max-min) + 1)) + min);