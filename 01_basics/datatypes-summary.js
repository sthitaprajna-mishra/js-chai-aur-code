// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId)
// console.log(id === anotherId)

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Shaktimaan", "Naagraj", "Doga"]
const myObj = {
    name: "hitesh",
    age: 32,
}
const myFunc = function() {
    console.log("Hello world!");
}

// console.log(typeof heroes)
// console.log(typeof myObj)
// console.log(typeof myFunc)
// console.log(typeof id)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let youtubename = "hiteshchoudharydotcom"
let anothername = youtubename
anothername = "chaiaurcode"
// console.log(youtubename)
// console.log(anothername)

let user1 = {
    email: "google.com",
    upi: "user@ybl"
}
let user2 = user1
user2.email = "yahoo.com"
console.log(user1)
console.log(user2)