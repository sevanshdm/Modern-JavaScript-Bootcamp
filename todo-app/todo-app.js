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

const filters = {
    searchText: ''
}

const renderTodos = function(todos,filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLocaleLowerCase().includes(filters.searchText.toLowerCase())
    })
    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function(todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input',function(event){
    filters.searchText = event.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(event){
    event.preventDefault()
    todos.push({
        text: event.target.elements.text.value,
        completed: false
    })

    renderTodos(todos, filters)

    event.target.elements.text.value = ''
})