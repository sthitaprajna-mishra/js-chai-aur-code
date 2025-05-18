// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log("DB CONNECTED")
})(); // add semi-colon

(() => {
    // un-named IIFE
    console.log("DB TWO CONNECTED")
})()
