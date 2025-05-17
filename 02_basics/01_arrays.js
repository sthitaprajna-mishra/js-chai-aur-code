
const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray[3])

const myHeroes = ["Spider-Man", "Hulk", "Iron Man"]
myHeroes.push(6)
// console.log(myHeroes)
myHeroes.pop()
// console.log(myHeroes)
myHeroes.unshift(99)
// console.log(myHeroes)
myHeroes.shift()
// console.log(myHeroes)

// console.log(myHeroes.includes(9))
// console.log(myHeroes.indexOf(9))

const joinedHeroes = myHeroes.join("-")
// console.log(joinedHeroes)
// console.log(typeof joinedHeroes)

console.log("A", myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)
console.log("B", myArray)

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("C", myArray)