//pair name/value
const greeting = 'Hello' //lexical context 1

function execution() {
    const greeting = 'Hi' //lexical context 2
    return greeting
}

//objects are nested groups of name/value pairs
const Client = {
    name: 'Giovanna',
    age: 21,
    weight: 60,
    adress: {
        city: 'Steps',
        houseType: 'Apartment',
        number: 202
    }
}

console.log(greeting)
console.log(execution())
console.log(Client)