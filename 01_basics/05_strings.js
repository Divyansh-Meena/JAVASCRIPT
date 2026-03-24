// const name ="divyansh"
// const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('divyansh-lm-sd')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "  divyansh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://divyansh.com/divyansh%20meena"

console.log(url.replace('%20','+'))

console.log(url.includes('divyansh'))
console.log(url.includes('deadman'))

console.log(gameName.split('-'));