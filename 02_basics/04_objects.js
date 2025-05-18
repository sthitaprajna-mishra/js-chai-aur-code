// const tinder = new Object()
const tinder = {}

tinder.id = "123abc"
tinder.name = 'Sunny'
tinder.isLoggedIn = false

// console.log(tinder)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        firstName: "Rohit",
        lastName: "Mishra"
    },
}

// console.log(regularUser.fullName?.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign(obj1, obj2) // Object.assign(target, ...sources)

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

const users = [
    {id: 1, email: "h@gmail.com"},
    {id: 2, email: "i@gmail.com"},
    {id: 3, email: "j@gmail.com"},
    {id: 4, email: "k@gmail.com"},
    {id: 5, email: "l@gmail.com"},
]

// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty("isLogged"))

const course = {
    name: "js in hindi",
    price: "999",
    instructor: "hitesh" 
}

const {price: paisa} = course

// console.log(paisa)


