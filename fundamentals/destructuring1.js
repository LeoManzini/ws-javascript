// new feature ES2015

const person = {
    name: 'Anna',
    age: 5,
    adress: {
        street: 'SkyWalker',
        number: 1000
    }
}

const { name, age } = person
console.log(name, age)

const { name: n, age: a } = person
console.log(n, a)

const { lastName, goodHumored = true } = person
console.log(lastName, goodHumored)

const { adress: { street, number, code } } = person
console.log(street, number, code)
