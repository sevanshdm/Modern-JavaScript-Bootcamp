const getPuzzle = async (wordCount) => {
    //fetch
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// const getPuzzleOld = (wordCount) => {
//     return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then ((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error ('Unable to fetch the puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

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

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=23867c384abeb4').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error ('Unable to fetch location')
        }
    })
}


