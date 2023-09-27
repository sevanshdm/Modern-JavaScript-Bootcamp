// Prototypal Inheritance
class Person {
    // Constructor function (typically have capital first letter.(Constructors are meant to be called with "new"))
    // Do not put return in constructor functions.
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.` // this line is the parent "this." as referred to below on line 16

        this.likes.forEach((like) => { 
            bio +=` ${this.firstName} likes ${like}.` // Arrow functions don't bind "this." values, so it uses what ever "this." value its parent has
        })
    
        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

const me = new Person('Shrek', 'Swampington', 33, ['Teaching', 'Biking'])
me.setName('Gingy Baker')
console.log(me.getBio())

const person2 = new Person('Donkey', 'Talkerton', 42)
console.log(person2.getBio())

