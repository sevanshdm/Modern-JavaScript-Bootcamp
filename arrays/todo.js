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

const sortTodos = function(todos){
    todos.sort(function(a,b) {
        if(!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else{
            return 0
        }     
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Take a shower')
// console.log(todos)