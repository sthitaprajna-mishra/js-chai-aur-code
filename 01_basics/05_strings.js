const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// console.log(`${name} is my name and I have ${repoCount} repositories`)

let gameName = "hitesh-hc" // new String("hitAAshhhc")

// console.log(gameName[0])

gameName[0] = "D"
// console.log(gameName[0])

// console.log(gameName.__proto__)

// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("t"))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lochitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-"));
console.log(url.includes("x"))


console.log(gameName.split(""));
