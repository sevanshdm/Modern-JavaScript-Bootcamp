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



const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()
    
    countryRequest.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            const country = data.find((country) => country.cca2 === countryCode)
            resolve(country)
        } else if (event.target.readystate === 4) {
            reject('Unable to fetch data')
        }
    
    })
    countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
    countryRequest.send()
})


