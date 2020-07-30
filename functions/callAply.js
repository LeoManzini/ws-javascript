function getPrice(duty = 0, money = '$') {
    return `${money} ${this.price * (1 - this.discount) * (1 + duty)} `
}

const product = {
    name: 'Notebook', 
    price: 4589, 
    discount: 0.15,
    getPrice
}

global.price = 20
global.discount = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = {
    price: 49990,
    discount: 0.2
}
console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, 'R$'))
console.log(getPrice.apply(car, [0.17, 'R$']))