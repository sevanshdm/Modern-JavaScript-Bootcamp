//This is an object
let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`) 

myBook.title = 'Animal Farm'

console.log (`${myBook.title} by ${myBook.author}`)

// Challenge
//name, age, location

// ex Tony is 28 and lives in Brazil
// increase age by 1 and print message again

let person = {
    name: 'Tony',
    age: 28,
    location: 'Brazil'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
