// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('Car parts', 2)

puzzleEl.textContent = game1.Puzzle
guessesEl.textContent = game1.StatusMessage

window.addEventListener('keydown', (event) => {
    const guess = event.key
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.Puzzle
    guessesEl.textContent = game1.StatusMessage
})

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 4 && event.target.status === 200) {
        const data = JSON.parse(event.target.responseText)
        console.log(data)
    } else if (event.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

// GET is the method as shown in the network tab in the dev tools
request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = "MX"
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 4 && event.target.status === 200) {
        const data = JSON.parse(event.target.responseText)
        const country = data.find((country) => country.cca2 === countryCode)
        console.log(country.name.common)
    } else if (event.target.readystate === 4) {
        console.log('Unable to fetch data.')
    }

})

countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
countryRequest.send()
