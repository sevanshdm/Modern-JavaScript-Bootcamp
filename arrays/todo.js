const toDoList = ['Go home', 'Workout', 'Take a shower', 'Eat dinner', 'Go to bed']

toDoList.splice(2,1)
toDoList.push('Eat bacon')
toDoList.shift()

console.log(`You have ${toDoList.length} todos)`)

toDoList.forEach(function(toDo, index){
    const num = index + 1
    console.log(`${num}. ${toDo}`)
})



