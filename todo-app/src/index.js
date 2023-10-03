import { renderTodos } from "./views"
import { setFilters } from "./filters"
import { createTodo, loadTodos } from "./todos"

renderTodos()

document.querySelector('#search-text').addEventListener('input', (event) => {
    setFilters({
        searchText: event.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (event) => {
    const text = event.target.elements.text.value.trim()
    event.preventDefault()
    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        event.target.elements.text.value = ''
    } 
})

document.querySelector('#hide-completed').addEventListener('change', (event) => {
    setFilters({
        hideCompleted: event.target.checked
    })
    renderTodos()
})

// Add a watcher for local storage
window.addEventListener('storage', (event) => {
    if (event.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})