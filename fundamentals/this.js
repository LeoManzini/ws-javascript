let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'Test'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//creating a crazy var
abc = 3 //never do this!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'test' }