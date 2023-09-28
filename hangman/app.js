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

getPuzzle('2', (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry('US', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country name : ${country.name.common}`)
    }

})

