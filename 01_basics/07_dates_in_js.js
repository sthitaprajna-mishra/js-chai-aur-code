let myDate = new Date()

// console.log(myDate) // 2025-05-17T14:24:19.714Z
// console.log(myDate.toString()) // Sat May 17 2025 14:25:00 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sat May 17 2025
// console.log(myDate.toISOString()); // 2025-05-17T14:26:56.790Z
// console.log(myDate.toJSON()); // 2025-05-17T14:26:56.790Z
// console.log(myDate.toLocaleDateString()); // 5/17/2025
// console.log(myDate.toLocaleString()); // 5/17/2025, 2:26:56 PM

// console.table([myDate, myDate.toString(), myDate.toDateString(), myDate.toISOString(),
//     myDate.toJSON(), myDate.toLocaleDateString(), myDate.toLocaleString()
// ])

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toLocaleString())

let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myCreatedDate.getTime())

const newDate = new Date()
const result = newDate.toLocaleString("default", {
    weekday: "long"
})
console.log(result)
