let myName = "hitesh        "

console.log(myName.length)

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log("Hitesh is present in all objects")
}

Array.prototype.heyHitesh = function() {
    console.log("heyHitesh says hello!")
}

// heroPower.heyHitesh()
myHeroes.heyHitesh()

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    // __proto__: TeachingSupport // old approach
}

// Teacher.__proto__ = User // old approach

// modern approach
Object.setPrototypeOf(Teacher, User)

let anotherUsername = "ChairAurCode         "

String.prototype.trueLength = function() {
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
