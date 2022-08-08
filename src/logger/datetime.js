let date_ob =new Date();
function printDate(){
    let date=(date_ob.getDate())
    console.log("Date:"+date)
}
function printMonth(){
    let month= (date_ob.getMonth()+1)
    console.log("Month:"+month + 1)
}
function getBatchInfo(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system")
}
 module.exports.printDate = printDate
 module.exports.printMonth = printMonth
 module.exports.getBatchInfo = getBatchInfo




