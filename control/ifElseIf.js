Number.prototype.between = function(min, max) {
    return this >= min && this <= max
}

const printResult = function(grade) {
    if(grade.between(9, 10)){
        console.log('Honor board')
    } else if(grade.between(7, 8.99)) {
        console.log('Approved')
    } else if(grade.between(4, 6.99)) {
        console.log('Recovery')
    } else if(grade.between(0, 3.99)) {
        console.log('Disaproved')
    } else {
        console.log('Invalid Grade...')
    }
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)