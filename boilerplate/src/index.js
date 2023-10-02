                        // Rest Parameters
const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    //return sum / numbers.length (returns the number value)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}.` // returns a template string with values included
}

console.log(calculateAverage('grade', 0, 100, 88, 64))

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

