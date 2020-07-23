let double = function(a) {
    return 2 * a
} 

double = (a) => {
    return 2 * a
}

double = a => 2 * a //implicit return
console.log(double(Math.PI))

let hello = function() {
    return 'Hello'
}

hello = () => 'Hello'
console.log(hello())