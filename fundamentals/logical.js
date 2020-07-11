function shopping(work1, work2) {
    const buyIceCream = work1 || work2
    const buyTv50 = work1 && work2
    //const buyTv32 = !!(work1 ^ work2) //bitwise xor
    const buyTv32 = work1 != work2
    const keepHealth = !buyIceCream

    return { buyIceCream, buyTv50, buyTv32, keepHealth }
}

console.log(shopping(true, true))
console.log(shopping(true, false))
console.log(shopping(false, true))
console.log(shopping(false, false))