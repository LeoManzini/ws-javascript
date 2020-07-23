let compareWithThis = function(parameter) {
    console.log(this === parameter)
}

compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global)
compareWithThis(obj)

let compareWithThisArrow = (parameter) => console.log(this === parameter)
compareWithThisArrow(global)
compareWithThisArrow(module.exports)

compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(obj)
compareWithThisArrow(module.exports)