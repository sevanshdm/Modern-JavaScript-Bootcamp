const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Brazil'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

// const user = {
//     name: 'Shrek',
//     age: 33
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event){
    event.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(event){
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(event){
    console.log(event.target.value)
})