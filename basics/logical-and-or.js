/*
let temp = 135

if (temp >= 60 && temp <= 90) {
    console.log('Noice!')
} else if(temp <= 0 || temp >= 120) {
    console.log("Don't do it!")
} else {
    console.log('Meh, up to you')
}
*/

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Give em the rabbit feed')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Only one of you gets the rabbit feed')
} else {
    console.log("Here's some real food")
}
 