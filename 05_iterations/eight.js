const myNums = [1,2,3,4,5,6,7,8,9,10]

const initialValue = 0

const result = myNums.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    initialValue)

console.log(result)
