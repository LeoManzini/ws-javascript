let value //not initialized
console.log(value)

value = null //void
console.log(value)
//console.log(value.toString()) //Error, string can't work with null values

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product) 

product.price = undefined //avoid this!!!
// delete product.price //correct way to do this
console.log(product)

product.price = null  //without price
console.log(product)