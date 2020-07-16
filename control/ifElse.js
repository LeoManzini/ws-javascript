const printResult = function(grade) {
    if(grade >= 7) {
        console.log('Approved with grade ' + grade)
    } else {
        console.log('Disapproved with grade ' + grade)
    }
}

printResult(10)
printResult(4)
printResult('What??')
console.log('')

const printCorrect = function(grade) {
    if(Number.isInteger(grade)){
        if(grade >= 7) {
            console.log('Approved with grade ' + grade)
        } else {
            console.log('Disapproved with grade ' + grade)
        }    
    } else {
        console.log('Your input is not a number...')
    }
}

printCorrect(10)
printCorrect(4)
printCorrect('What??')