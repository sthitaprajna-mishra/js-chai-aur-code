// const promiseOne = new Promise((resolve, reject) => {
//     // do any async task
//     // db calls, cryptography, network
//     setTimeout(() => {
//         console.log("Async task is complete")
//         resolve()
//     }, 1000)

// })

// promiseOne.then(() => {
//     console.log("Promise consumed")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("another async task completed");
//         resolve()
//     }, 1000)
// })
// .then(() => {
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // does a ton of async work
//         resolve({username: "chai", email: "chai@chaiaurcode.com"})
//     }, 1000);
// })

// promiseThree.then((user) => {
//     console.log(user)
//     console.log(JSON.stringify(user))
//     console.log(JSON.parse(JSON.stringify(user)))
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error) {
//             resolve({username: "hitesh", password: "pwd12345"})
//         } else {
//             reject("ERROR: Something went wrong. :(")
//         }
//     }, 1000);
// })

// promiseFour
// .then(user => user.username)
// .then(username => console.log(username))
// .catch(err => console.log(err))
// .finally(() => console.log("The promise is either resolved or rejected."))

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({username: "javascript", password: "pwd12345"})
//         } else {
//             reject("ERROR: Something went wrong in JS. :(")
//         }
//     }, 1000);
// })

// const consumePromiseFive = async () => {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (err) {
//         console.error(err)
//     }
// }

// consumePromiseFive()

// const getAllUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/")
//         const jsonData = await response.json()
//         console.log(jsonData)
//     } catch(e) {
//         console.log(e)
//     }
// } 

// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users/")
.then(response => response.json())
.then(data => console.log(data))
.catch(e => console.error(e))
