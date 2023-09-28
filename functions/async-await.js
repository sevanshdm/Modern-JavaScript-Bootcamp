const getDataPromise = (num) =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})
 

// Async functions always returns a promise. the promise is resolved with the value that you return from the function
// With Async and await operator, we can structure our code that uses promises to look more like regular sync code.
const processData = async () => {
    let data = await getDataPromise(2) // if there's an error, await will throw it for you. no need to manually code it in. 
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
}

                  // 12
processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})