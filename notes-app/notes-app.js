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

document.querySelector('#create-note').addEventListener('click', function(event){
    event.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(event){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(event){
    console.log(event.target.value)
})