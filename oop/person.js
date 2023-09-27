// Constructor function (typically have capital first letter.(Constructors are meant to be called with "new"))
// Do not put return in constructor functions.
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// prototype object is how to create a method on the constructor function(Person) .getBio is the new method's name
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.` // this line is the parent "this." as referred to below on line 16

    this.likes.forEach((like) => { 
        bio +=` ${this.firstName} likes ${like}.` // Arrow functions don't bind "this." values, so it uses what ever "this." value its parent has
    })

    return bio
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Shrek', 'Swampington', 33, ['Teaching', 'Biking'])
me.setName('Gingy Baker')
console.log(me.getBio())

const person2 = new Person('Donkey', 'Talkerton', 42)
console.log(person2.getBio())

