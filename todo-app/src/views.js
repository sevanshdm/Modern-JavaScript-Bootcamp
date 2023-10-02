import { getTodos, toggleTodo, removeTodo } from "./todos"
import { getFilters } from "./filters"

// Render application todos based on filters
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filters = getFilters()

    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLocaleLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkBox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = todo.completed
    containerEl.appendChild(checkBox)
    checkBox.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's' // conditional operator method
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left` 
    return summary
           //or if statments work as well 
    // if (incompleteTodos.length === 1) {
    //     summary.textContent = `You have ${incompleteTodos.length} todo left`
    //     return summary
    // } else {
    //     summary.textContent = `You have ${incompleteTodos.length} todos left`
    //     return summary
    // }
}

export { generateTodoDOM, renderTodos, generateSummaryDOM }