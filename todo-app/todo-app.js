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

const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

const summary = document.createElement('h2')

summary.textContent = `You have ${incompleteTodos.length} todos left`

document.querySelector('body').appendChild(summary)

todos.forEach(function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click',function(event){
    console.log('Add a new todo...')
})