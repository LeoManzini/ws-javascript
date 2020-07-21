function getRandonInt(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getRandonInt(-1, 10)
    console.log(`The option was ${option}.`)
} while(option != -1)

console.log('GoodBye...')