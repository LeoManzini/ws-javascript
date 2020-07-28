function Car(maxSpeed = 200, delta = 5) {
    // Private attribute
    let actualSpeed = 0

    // Public method
    this.accelerate = function() {
        if(actualSpeed + delta <= maxSpeed) {
            actualSpeed += delta
        } else {
            actualSpeed = maxSpeed
        }
    }

    // Public method
    this.getActualApeed = function() {
        return actualSpeed + ' Km/h'
    }
}

const uno = new Car()
uno.accelerate()
console.log(uno.getActualApeed())

const ferrari = new Car(320, 20)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getActualApeed())

console.log(typeof Car)
console.log(typeof ferrari)