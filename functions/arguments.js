// Multiple arguments
let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function(pName = 'Shrek', score = 0){
    //return 'Name: ' + pName + ' - Score: ' + score 
    return `Name: ${pName} - Score: ${score}`           // template strings. use ${} istead of concatenating with a ton of +'s
}

let scoreText = getScoreText(undefined, 99)

console.log(scoreText)

// Challenge
// total, tipPercent .2

let getTip = function(total, tipPercent = .25){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(50)
console.log(tip)
