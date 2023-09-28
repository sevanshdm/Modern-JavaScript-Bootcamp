const getPuzzle = (wordCount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then ((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error ('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

//Fetch
const getCountry = (countryCode) => {
    return fetch('https://restcountries.com/v3.1/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error ('Unable to fetch data')
        }
    }).then((data) => {
        const country = data.find((country) => country.cca2 === countryCode)
        return country
    })
}


