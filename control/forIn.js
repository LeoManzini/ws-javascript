const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in grades) {
    console.log(`I is ${i}, what is inside is ${grades[i]}.`)
}

const people = {
    name: 'Giovanna',
    lastName: 'Manzini',
    age: 21,
    weight: 49
}

for(let attributes in people) {
    console.log(`Index is ${attributes}, value is ${people[attributes]}`)
}