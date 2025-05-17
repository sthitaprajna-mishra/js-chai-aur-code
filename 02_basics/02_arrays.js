const marvel_heroes = ["ironman", "spiderman", "hulk"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

const new_heroes = marvel_heroes.concat(dc_heroes)
// console.log(new_heroes)

marvel_heroes.push(...dc_heroes)
// console.log(marvel_heroes)

const another_array = [1,2,3,4, [5,6,7], 8, [6, 7, [4, 5]]]
const real_arr = another_array.flat(Infinity)
// console.log(real_arr)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))