 const todos = [{
    text: 'Go home',
    completed: 'true'
}, {
    text: 'Workout',
    completed: 'false'
}, {
    text: 'Take a shower',
    completed: 'true'
}, {
    text: 'Eat dinner',
    completed: 'false'
}, {
    text: 'Go to bed',
    completed: 'true'
}]

const deleteTodo = function (todos, todoText){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}
// 1. convert array to array of objects -> text, completed
// 2. create function to remove a todo by text value

deleteTodo(todos, 'Take a shower')
console.log(todos)