/*
//                         // Rest Parameters
// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0
//     numbers.forEach((num) => sum += num)
//     //return sum / numbers.length (returns the number value)
//     const average = sum / numbers.length
//     return `The average ${thing} is ${average}.` // returns a template string with values included
// }

// console.log(calculateAverage('grade', 0, 100, 88, 64))

// const printTeam = (teamName, coach, ...players) => {
//     console.log(`Team: ${teamName}`)
//     console.log(`Coach: ${coach}`)
//     console.log(`Players: ${players.join(', ')}`)
// }

// printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')


// Spread syntax
const printTeam = (teamName, coach, firstPlayer, secondPlayer) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    //console.log(`Players: ${players.join(', ')}`)
    console.log(firstPlayer, secondPlayer)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
                                // Spread Operator with arrays
printTeam(team.name, team.coach, ...team.players) // separates the array into individual arguments.

const cities = ['Araraquara', 'Birigui', 'Franca']
const citiesCopy = [...cities, 'Belo Horizonte'] // You can use a Spread operator to copy an array.

// let cities = ['Araraquara', 'Birigui', 'Franca']
// cities= [...cities, 'Belo Horizonte']

console.log(cities)
console.log(citiesCopy)


                                // Spread Operator with Objects
let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

// Copies house object into newHouse
let newHouse = {
    basement: true,
    ...house, // copies house values, order matters if this was put after "bedrooms" it would override it.
    bedrooms: 3
}
// newHouse.yearBuilt = 2018

console.log(house)
console.log(newHouse)

const person = {
    name: 'Shrek',
    age: 33
}

const location = {
    city: 'Sherwood Forest',
    country: 'Duloc'
}

let overview = {
    ...person,
    ...location
}

console.log(overview)
*/

                                        // Destructuring
const todo = {
    id: 'asdfjklw',
    text: 'Pay the bills',
    completed: false   
}

// const text = todo.text
// const completed = todo.completed

const printTodo = ({text, completed}) => { // destructuring in function parameters, insert { } in the ( )
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

//renames the new var to todoText, adds details to object and gives a value
const { text:todoText, completed, details = 'No details provided', ...others } = todo // Destructuring, this gets the values from the todo object and creates two new variables

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

// Destructuring an array
const age = [65, 0, 13]
                            // creates new item in array and assigns it value
//const [firstAge, secondAge, , lastAge = 123] = age // each item gets it's value in the order which they are created. the ', ,' skips an index in the array

const [firstAge, ...otherAges] = age

console.log(firstAge) // 65
console.log(otherAges) // 0, 13
//console.log(secondAge) // 0
//console.log(lastAge) // 123