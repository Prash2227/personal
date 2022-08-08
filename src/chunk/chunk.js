const deep = require('lodash')
const chunkyPandey = function(){
let  months = ["jan", "feb", "mar","apr", " may", "jun","july", "aug","sep","oct","nov","dec"]
let monthsArry = deep.chunk(months,3)
console.log(monthsArry)
}
module.exports.chunks = chunkyPandey