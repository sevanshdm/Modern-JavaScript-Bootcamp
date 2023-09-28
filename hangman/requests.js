const getPuzzle = (callback) => {
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
    request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3')
    request.send()

}