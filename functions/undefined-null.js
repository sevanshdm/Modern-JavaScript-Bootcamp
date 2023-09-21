// Undefined for variable
let name

name = 'Shrek'

if (name === undefined) {
    console.log('Bruv')
}else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value
let square = function(num){
    console.log(num)
}

let result = square()

console.log(result)

// Null is purposely assigned. Undefined is typically not
let age = 77

age = null
console.log(age)