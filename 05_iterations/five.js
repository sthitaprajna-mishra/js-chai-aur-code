
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item, index, arr) => {
//     console.log(`${item} at index ${index} of the array ${arr}`)
// })

const myCoding = [
    {
        languageName: "javascript",
        extensionName: ".js"
    },
    {
        languageName: "java",
        extensionName: ".java"
    },
    {
        languageName: "python",
        extensionName: ".py"
    },
]

myCoding.forEach((item) => {
    console.log(item["languageName"])
})
