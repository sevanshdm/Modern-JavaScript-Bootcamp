const add = function() {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

// Using this with a normal function
// const car = {
//     color: 'Red',
//     getSummary: function() {
//         return `The car is ${this.color}`
//     }
// }

// Using this with an arrow function
const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())