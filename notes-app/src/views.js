import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes, getNotes} from './notes'


// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    //remove button on main screen
//     const button = document.createElement('button')

// // Setup the remove note button
//     button.textContent = 'x'
//     noteEl.appendChild(button)
//     button.addEventListener('click', () => {
//         removeNote(note.id)
//         saveNotes(notes)
//         renderNotes(notes,filters)
//     })

    // Setup the note title text
    if (note.title.length > 0){
        textEl.textContent = note.title
    } else{
        textEl.textContent = 'Unnamed note'
    }
    //textEl.setAttribute('target', '_blank')
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''
    
    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        // adds class to html doc
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const dateElement = document.querySelector('#last-edited')
    const notes = getNotes()

    // Before arrow function
    // let note = notes.find(function(note){
    //     return note.id === noteId
    // })

    // After arrow function
    const note = notes.find((note) => note.id === noteId)

    if (!note) { // is the same as if (note === undefined) {
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export {generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage}