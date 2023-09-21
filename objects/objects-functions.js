let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Hatchet', 
    author: 'Gary Paulsen',
    pageCount: 195
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// challenge
// create function - take fahrenheit in - return object with all three
/*
let celcius = (fahrenheit - 32) / (9/5)
let kelvin = (fahrenheit - 32) * 5/9 + 273.15
*/
let convertFahrenheit = function(fahrenheit) {
    return{
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit - 32) * 5/9 + 273.15,
        celcius: celcius = (fahrenheit - 32) / (9/5)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)