// Function - input (argument), code, output (return value)

let greetUser = function() {
    console.log('Welcome user')
}

//calls function
greetUser()

let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// challenge
// convert fahrenheit to celcius
// a couple of times 
// print converted values

/*
let fahrenheit = 30
let celcius = (fahrenheit - 32) / (9/5)
let kelvin = (fahrenheit - 32) * 5/9 + 273.15
*/
let fahrenheitToCelcius = function(fahrenheit){
    let celcius = (fahrenheit - 32) / (9/5)
    return celcius
}

let tempOne = fahrenheitToCelcius(30)
let tempTwo = fahrenheitToCelcius(68)

console.log(tempOne)
console.log(tempTwo)
