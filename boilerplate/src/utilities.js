// Named export 
// Default export (you can only have one of these per file)

// export const add =(a,b) => a + b

// export const name = 'Shrek'

// const square = (x) => x * x
// export default square

const add =(a,b) => a + b

const name = 'Shrek'

const square = (x) => x * x
console.log('from my code')

// Alternative way to define all exports in one place (typically in the last line of file)
export { add, name, square as default }