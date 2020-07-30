class People {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`Hi my name is ${this.name}`)
    }
}
const p1 = new People('João')
p1.speak()

const Person = name => {
    return {
        speak: () => console.log(`Hi my name is ${name}`)
    }
}
const p2 = Person('Giovanna')
p2.speak()