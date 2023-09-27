const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.Puzzle
guessesEl.textContent = game1.StatusMessage

window.addEventListener('keydown', function(event){
    const guess = event.key
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.Puzzle
    guessesEl.textContent = game1.StatusMessage
})