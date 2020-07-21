function getRandonInt(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while(option != -1) {
    option = getRandonInt(-1, 10)
    console.log(`The option was ${option}.`)
}

console.log('GoodBye...')