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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error ${err}`)
})

// getCountry('US').then((country) => {
//     console.log(country.name.common)
// }, (err) => {
//     console.log(`Error ${err}`)
// })

// Fetch API
// fetch('https://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json() // This is a type of promise
//     } else{
//         throw new Error('Unable to fetch the puzzle.') // Throws this error to .catch below
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((err) => {
//     console.log(err)
// })
