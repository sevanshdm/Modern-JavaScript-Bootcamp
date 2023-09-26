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



const birthDay = moment()
birthDay.year(1997).month(0).date(29)
console.log(birthDay.format('MMMM DD, YYYY'))

// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())
