const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in numbers) {
    if(x == 5) {
        break
    }
    console.log(`Position ${x} = ${numbers[x]}.`)
}

for(y in numbers) {
    if(y == 5) {
        continue
    }
    console.log(`Position ${y} = ${numbers[y]}.`)
}

external: for(a in numbers) {
    for(b in numbers) {
        if(a == 2 && b == 3) {
            break external
        }
        console.log(`Pair ${a}, ${b}.`)
    }
}