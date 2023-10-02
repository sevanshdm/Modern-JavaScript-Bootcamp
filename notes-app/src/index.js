import { getNotes, createNote, removeNote, updateNote } from './notes.js'
import { getFilters, setFilters} from './filters'

// console.log(getNotes())
// createNote()
// removeNote('1')

// updateNote('1',{
//     title: 'My note title',
//     body: 'This is the body for my note.'
// })
// console.log(getNotes())

console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
})
console.log(getFilters())