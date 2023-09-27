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

class Employee extends Person {
    constructor(position, ...rest){
        super(...rest)
        this.position = position
    }
    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
        //Shrek is a Teacher
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(grade, ...rest){
        super(...rest)
        this.grade = grade
    }
    updateGrade(change){
        this.grade += change

    }
    getBio(){
        const status = this.grad >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student(88, 'Shrek', 'Swampington', 33, [])
me.updateGrade(-20)
console.log(me.getBio())