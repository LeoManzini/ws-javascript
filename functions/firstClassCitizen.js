//In JS you can treat a function as data

//Create literally
function fun1() {}

//Store in a var, call it with the var name and parentheses
const fun2 = function() {}

//Store in an array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Store in an object 
const obj = {}
obj.speak = function() {return 'Hi!!'}
console.log(obj.speak())

//Pass as a parameter
function run(fun) {
    fun()
}
run(function() {console.log('Executing...')})

//A function can return/contain a function
function sum(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
sum(2, 3)(4)