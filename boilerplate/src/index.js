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


