const getPuzzle = (wordCount, callback) => {
    // Making an HTTP request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            callback(undefined, data.puzzle)
        } else if (event.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    // GET is the method as shown in the network tab in the dev tools
    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest()
    
    countryRequest.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            const country = data.find((country) => country.cca2 === countryCode)
            callback(undefined, country)
        } else if (event.target.readystate === 4) {
            callback('Unable to fetch data', undefined)
        }
    
    })
    
    countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
    countryRequest.send()
}
