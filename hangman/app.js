// product --> Object.prototype --> null
const product = new Object({
    name: 'The War Of Art'
})

// hasOwnProperty
console.log(product.hasOwnProperty('price'))
console.log(product)