const name = 'Giovanna'
const concatenation = 'Hello ' + name + '!'
const template = `
    Hello
    ${name}!`
console.log(concatenation, template)

//expressions
console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()
console.log(`Hey... ${up('caution')}!`)