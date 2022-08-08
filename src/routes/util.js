const trim = function(){
    let name1 = "     Prashant Waghmare       "
    name1 = name1.trim()
    console.log(name1)
}

const changetoLowerCase = function(){
    let lowerCase = "PRASHANT"
    lowerCase = lowerCase.toLowerCase()
    console.log(lowerCase)
}

const ChangetoUpperCase = function(){
    let UpperCase = "PrashAnt"
    UpperCasec = UpperCase.toUpperCase()
    console.log(UpperCase)
}




module.exports.strimMyString = trim
module.exports.lowecaseString = changetoLowerCase
module.exports.UpperCaseString = ChangetoUpperCase