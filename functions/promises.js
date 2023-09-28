// Callback are gross
const getDataCallback = (num, callback) => {
    setTimeout(()=>{
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }
})

// Promise                 // resolve is called to say that things went well, reject is for when something failed.
const getDataPromise = (num) =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})
 
// Less optimal way to have a promise do something twice(there's more nesting with more iterations)
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
})

// Better way aka Promise Chaining(this one does something three times)
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})