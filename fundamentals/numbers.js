const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const test1 = 9.871
const test2 = 6.871

const total = test1 * weight1 + test2 * weight2
const average = total / (weight1 + weight2)

console.log(average.toFixed(2))
console.log(average.toString(2)) //Binary 
console.log(typeof average)
console.log(typeof Number)