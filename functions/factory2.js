function createProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1
    }
}

console.log(createProduct('Tv', 1800))
console.log(createProduct('Notebook', 2999))
