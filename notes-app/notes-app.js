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

document.querySelector('button').addEventListener('click', function(event){
    event.target.textContent = 'The button was clicked'
})