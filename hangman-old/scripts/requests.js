// Async function
const getPuzzle = async (wordCount) => {
    //fetch
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

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


const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.com/v3.1/all')
    
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.cca2 === countryCode)
    } else {
        throw new Error ('Unable to fetch the country')
    }
}
// const getCountryOld = (countryCode) => {
//     return fetch('https://restcountries.com/v3.1/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error ('Unable to fetch data')
//         }
//     }).then((data) => {
//         return data.find((country) => country.cca2 === countryCode)
//     })
// }

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=23867c384abeb4')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}

const getCurrentCountry = async() => {
    const location = await getLocation()
    
    return getCountry(location.country)
    // You don't have to await something just to return it.
    // const country = await getCountry(location.country)
    // return country
}
