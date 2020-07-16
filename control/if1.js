function onlyGoodNews(grade) {
    if(grade >= 7) {
        console.log('Approved with grade ' + grade)
    } 
}

onlyGoodNews(8.1)
onlyGoodNews(6.1)

function ifIsTrueISay(value) {
    if(value) {
        console.log('It is true... ' + value)
    }
}

ifIsTrueISay()
ifIsTrueISay(null)
ifIsTrueISay(undefined)
ifIsTrueISay(NaN)
ifIsTrueISay('')
ifIsTrueISay(0)
ifIsTrueISay(-1)
ifIsTrueISay(' ')
ifIsTrueISay('?')
ifIsTrueISay([])
ifIsTrueISay([1, 2])
ifIsTrueISay({})