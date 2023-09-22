 const todos = [{
    text: 'Go home',
    completed: true
}, {
    text: 'Workout',
    completed: false
}, {
    text: 'Take a shower',
    completed: true
}, {
    text: 'Eat dinner',
    completed: false
}, {
    text: 'Go to bed',
    completed: true
}]

const deleteTodo = function (todos, todoText){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos){
  return todos.filter(function(todo, index){
    return !todo.completed
  })  
} 



console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Take a shower')
// console.log(todos)