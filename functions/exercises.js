// Exercise one
function operations(a, b) {
    console.log(`Sum = ${a + b}\nSubtraction = ${a - b}\nMultplication = ${a * b}\nDivision = ${a / b}`)
}

operations(10, 5)

// Exercise two
const triangle = function(x = 1, y = 1, z = 1) {
    if(x == y && y == z) {
        return 'Equilateral triangle.'
    } else if(x == y || x == z || y == z) {
        return 'Isosceles triangle.'
    } else {
        return 'Scalene triangle.'
    }
}

console.log(triangle(8, 7))

// Exercise three
function squareRoot(base, exponent) {
    return Math.pow(base, exponent)
}

console.log(squareRoot(4, 8))

// Exercise four
function division(dividend, divider) {
    console.log(`Result = ${(dividend / divider).toFixed(4)}, Rest = ${dividend % divider}`)
}

division(100, 3)

// Exercise five
function dolarSignReal(number) {
    console.log(`R$ ${(number).toFixed(2).toString().replace('.', ',')}`)
    // Convert to string to use replace function
}

dolarSignReal(0.1 + 0.2)

// Exercise six
function simpleInterest(initialCapital, interestRate, time) {
    return initialCapital + initialCapital * interestRate * time
}

function compoundInterest(initialCapital, interestRate, time) {
    return initialCapital * (1 + interestRate) ** time
}

console.log(simpleInterest(1000, 10/100, 5))
console.log(compoundInterest(1000, 10/100, 5).toFixed(3))

// Exercise seven
function bhaskara(ax2, bx, c) {
    const result = []
    const delta = (bx * bx) - (4 * ax2 * c)
    if(delta < 0) {
        return 'Negative delta!'
    } else {
        result[0] = ((- bx) + Math.sqrt(delta)) / (2 * ax2)
        result[1] = ((- bx) - Math.sqrt(delta)) / (2 * ax2)
        return result
    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))