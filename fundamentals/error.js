function fixErrorAndThrow(error) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Message'
    throw {
        name: error.name,
        message: error.message,
        date: new Date
    }
}

function printScreamingName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        fixErrorAndThrow(e)
    } finally {
        console.log('Error...')
    }
}

const obj = { name: 'Giovanna' }
printScreamingName(obj)