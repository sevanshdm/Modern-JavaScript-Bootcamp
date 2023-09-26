const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Shrek',
    age: 33,
},{
    name: 'Donkey',
    age: 29
}, {
    name: 'Gingy',
    age: 127
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 127 )

console.log(under30)

const oldPerson = people.find((person) => person.age === 127)
console.log(oldPerson.name)