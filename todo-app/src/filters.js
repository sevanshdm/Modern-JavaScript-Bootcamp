const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

                    // updates
const setFilters = ({searchText, hideCompleted}) => { // Destructuring
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

export {getFilters, setFilters}