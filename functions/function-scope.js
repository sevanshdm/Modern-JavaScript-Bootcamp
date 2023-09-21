//Global (converFahrenheitToCelsius, tempOne, tempTwo)
  //Local scope (fahrenheit, celsius)
    //Local scope (isFreezing)

let fahrenheitToCelcius = function(fahrenheit){
    let celcius = (fahrenheit - 32) / (9/5)

    if (celcius <= 0) {
        let isFreezing = true
    }
    return celcius
}

let tempOne = fahrenheitToCelcius(30)
let tempTwo = fahrenheitToCelcius(68)

console.log(tempOne)
console.log(tempTwo)
