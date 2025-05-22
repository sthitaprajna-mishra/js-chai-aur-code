const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((item) => item+10)

const newNums = myNums.map(item => item+10).filter(item => item%2==0)

console.log(newNums)


