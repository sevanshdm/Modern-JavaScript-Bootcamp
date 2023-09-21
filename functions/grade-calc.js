// Students score, total possible score
// 15/20 -> You got a C (75%)!

const calc = function(score, possibleScore){
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

const result = calc(15, 20)
console.log(result)