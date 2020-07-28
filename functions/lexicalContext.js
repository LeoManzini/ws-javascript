const value = 'Global'

function myFunction() {
    console.log(value)
}

function execute() {
    const value = 'Local'
    myFunction()
}

execute()