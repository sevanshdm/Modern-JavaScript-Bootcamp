const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Brazil'
},{
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
},{
    Title: 'Office modification',
    body: 'Get a new seat'
},]
/*
notes[2] = 'This is the new note 3'

notes.forEach(function (item, index){
    console.log(index)
    console.log(item)
})
*/
console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'Habits to work on'
})
console.log(index)