function sayMyName() {
    "HITESH".split("").map(e => console.log(e))
}

// sayMyName()

function addTwoNumbers(a, b) {
    if(a == undefined || a == null || b == undefined || b == null) return;
    if(Number.isNaN(Number(a)) || Number.isNaN(Number(b))) return;
    console.log(a + b);
}

// addTwoNumbers()
// addTwoNumbers("a", 1)
// addTwoNumbers(3, 4)

function calculateCartPrice(...params) {
    console.log(params)
}

// calculateCartPrice(1,2,3,-1,[1,2])

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)