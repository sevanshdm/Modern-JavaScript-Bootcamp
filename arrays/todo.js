const toDoList = ['Go home', 'Workout', 'Take a shower', 'Eat dinner', 'Go to bed']

toDoList.splice(2,1)
toDoList.push('Eat bacon')
toDoList.shift()

console.log(`You have ${toDoList.length} todos)`)

toDoList.forEach(function(toDo, index){
    const num = index + 1
    console.log(`${num}. ${toDo}`)
})

for (count = 0; count < toDoList.length; count++){
    const num = count + 1
    const todo = toDoList[count]
    console.log(`${num}. ${todo}`)
}

