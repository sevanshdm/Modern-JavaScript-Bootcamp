import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Read existing notes from local storage
const loadNotes = () => { // This is an arrow function
    const notesJSON = localStorage.getItem('notes')

    try{
        return notesJSON ? JSON.parse(notesJSON) : [] // Conditional (ternary) operator "?"
    } catch (e){
        return []
    }
    
    //Old way before the conditional operator
    // if (notesJSON !== null){
    //     return JSON.parse(notesJSON)
    // } else {
    //     return []
    // }
}

const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))

}

// Expose notes from module
const getNotes = () => notes

const createNote = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes()
}

notes = loadNotes()

export {getNotes, createNote}