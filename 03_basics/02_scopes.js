let a = 250

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log(a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)
    two()
}

// one()

// ++++++++++++++++++++++ interesting ++++++++++++++++++++++
addone(5)
console.log(addone(5))
function addone(num) {
    return num + 1
}

// addTwo(5)

const addTwo = function(num) {
    return num + 2
}

