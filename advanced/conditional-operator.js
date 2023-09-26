// const myAge = 26
// const message = myAge >= 18 ? 'You can vote.' : 'You cannot vote.'
// console.log(message)

//old way below
// if (myAge >= 18) {
//     message = 'You can vote.'
// } else {
//     message = 'You cannot vote.'
// }

const myAge = 26
const showPage = () => {
    console.log('Showing the page') 
}
const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

//This would also work
// const showPage = () => {
//     return 'Showing the page' 
// }
// const showErrorPage = () => {
//     return'Showing the error page'
// }
// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Tyler', 'Porter']
const message = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(message)
// Or this would work too
// const team = ['Tyler', 'Porter']
// console.log(team.length <=4 ? `Team size: ${team.length}` : 'Too many people on your team')
//This too
