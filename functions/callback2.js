const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Without callback
const lowGrades = []
for(let i in grades) {
    if(grades[i] < 7) {
        lowGrades.push(grades[i])
    }
}
console.log(lowGrades)

// With callback
const lowGrades2 = grades.filter(function(grade) {
    return grade < 7
})
console.log(lowGrades2)

// With arrow function and callback
const lowGrades3 = grades.filter(grade => grade < 7)
console.log(lowGrades3)

// you could use a function to make the tests
const approvedGrades = grades => grades < 7
const lowGrades4 = grades.filter(approvedGrades)
console.log(lowGrades4)

// Take care with callback functions, don't get your code confused