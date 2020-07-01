console.log(Math.ceil(6.1))

const obj1 = {}
obj1.name = 'Ball'
//obj1 ['name'] = 'Ball 2' do the same thing 
console.log(obj1.name)

function Obj(name) {
    this.name = name
    this.exec = function() {
        console.log('Executing...')
    }
}

const obj2 = new Obj('Chair')
const obj3 = new Obj('Table')

console.log(obj2.name)
console.log(obj3.name)
obj3.exec()