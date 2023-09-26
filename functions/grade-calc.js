// Students score, total possible score
// 15/20 -> You got a C (75%)!

// Before restructuring 
// const gradeCalc = function(score, possibleScore){
//     if (typeof score === 'number' && typeof possibleScore === 'number') {
//         const percent = (score/possibleScore) * 100
//         let letterGrade =''
    
//         if (percent >= 90){
//             letterGrade = 'A'
//         } else if(percent >= 80) {
//             letterGrade = 'B'
//         } else if(percent >= 70) {
//             letterGrade = 'C'
//         } else if(percent >= 60) {
//             letterGrade = 'D'
//         } else {
//             letterGrade = 'F'
//         }
//         return `You got a ${letterGrade} (${percent}%)`
//     } else {
//         throw Error('Please provide numbers only')
//     }
// } 

//  try {
//     const result = gradeCalc(true, 20)
//     console.log(result)
//  } catch(e) {
//     console.log(e.message) // Displays the error message from Error
//  }

// After 
const gradeCalc = function(score, possibleScore){
    if (typeof score !== 'number' || typeof possibleScore !== 'number') {
        throw Error('Please provide numbers only')
    }
    
    const percent = (score/possibleScore) * 100
    let letterGrade =''

    if (percent >= 90){
        letterGrade = 'A'
    } else if(percent >= 80) {
        letterGrade = 'B'
    } else if(percent >= 70) {
        letterGrade = 'C'
    } else if(percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)`
} 

 try {
    const result = gradeCalc(true, 20)
    console.log(result)
 } catch(e) {
    console.log(e.message) // Displays the error message from Error
 }