const marvel_heros = ["ironman","superman","thor"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heroes);
// console.log(allHeros);

/******** spread operator ****/
const all_new_heros = [...marvel_heros, ...dc_heroes]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[8,9,5,4,]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("Divyansh"));
console.log(Array.from("Divyansh"))
console.log(Array.from({name: "Divyansh"})) // interesting case give empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
