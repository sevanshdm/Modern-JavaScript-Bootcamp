// Constructor function (typically have capital first letter.(Constructors are meant to be called with "new"))
// Do not put return in constructor functions.
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Shrek', 'Swampington', 33)
console.log(me)

const person2 = new Person('Donkey', 'Talkerton', 42)
console.log(person2)

