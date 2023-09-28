const getPuzzle = (wordCount) => new Promise((resolve, reject) =>{
        // Making an HTTP request
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', (event) => {
            if (event.target.readyState === 4 && event.target.status === 200) {
                const data = JSON.parse(event.target.responseText)
                resolve(data.puzzle)
            } else if (event.target.readyState === 4) {
                reject('An error has taken place')
            }
        })
    
        // GET is the method as shown in the network tab in the dev tools
        request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        request.send()
})



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


