const people = {
    greetings: 'Good Morning!!',
    speak() {
        console.log(this.greetings)
    }
}

people.speak()
const speak = people.speak
speak()

const talk = people.speak.bind(people)
talk()