const sum = function(x, y) {
    return x + y
}

const print = function(a, b, operation = sum) {
    console.log(operation(a, b))
}

print(3, 4)
print(3, 4, sum)
print(3, 4, function(x, y) {
    return x - y
})
print(3, 4, (x, y) => x * y)

const people = {
    speak: function() {
        console.log('Hi')
    }
}

people.speak()