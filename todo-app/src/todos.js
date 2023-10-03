import uuidv4 from 'uuid/v4'

let todos = []

// Fetch existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try{
        todos = todosJSON ? JSON.parse(todosJSON) : [] // Conditional (ternary) operator "?"
    } catch (e) {
        todos = []
    }
    //Old way before the conditional operator
    // if(todosJSON !==null){
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
}

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos 

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex,1)
        saveTodos()
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) { // Before using truthy/falsey logic "if (todo !== undefined)""
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

export { getTodos, createTodo, removeTodo, toggleTodo, loadTodos }