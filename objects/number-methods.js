let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num)) // rounds down
console.log(Math.ceil(num))  // rounds up

let min = 10
let max = 20
// random number between 0-10 (Math.random is only random from 0-.99999, that's why this formula is here)
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge
// 1 - 5 true if correct false if not correct
 
let makeGuess = function(guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(1))