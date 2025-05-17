 // singleton

 // object literals

 const mySym = Symbol("key1")

 const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hietsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "symbol details" 
 }

//  console.log(JsUser[mySym])

// Object.freeze(JsUser)
JsUser.email = "abcdvv"
// console.log(JsUser)

JsUser["greeting"] = function() {
    console.log("Hello world!")
}

JsUser["greetingTwo"] = function() {
    console.log(`Hello ${this.name}!`)
}

console.log(JsUser)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())