let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event){
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })

    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(event){
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(event){
    console.log(event.target.value)
})

window.addEventListener('storage', function(event){
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue)
        renderNotes(notes,filters)
    }
})

// Unix Epoch - January 1st 1970 00:00:00
const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

const dateOne = new Date('March 1 2017 12:00:00')
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
}

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)