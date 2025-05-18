const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`Welcome to website, ${this.username}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// console.log(this)

// function chai() {
//     console.log(this)
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this)
}

chai()
