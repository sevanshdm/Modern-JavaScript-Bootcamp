/*
const toDoList = ['Go home', 'Workout', 'Take a shower', 'Eat dinner', 'Go to bed']

//Delete the 3rd item
//add new item to the end.
//remove first item from the list
toDoList.splice(2,1)
toDoList.push('Sleep')
toDoList.shift()
console.log(toDoList)
*/ 

const notes = ['Note 1', 'Note 2', 'Note 3']
notes[2] = 'This is the new note 3'

notes.forEach(function (item, index){
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)
