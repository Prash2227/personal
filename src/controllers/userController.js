const userModel1 = require("../models/userModel1")
// const userModel = require("../models/userModel1")





// const basicCode= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
//     }

const createUser= async function (req, res) {
    let data = req.body
    let savedData = await userModel1.create(data)
    res.send({data: savedData})
}
    
//     let data= req.body
//     let tokenDataInHeaders= req.headers.today
//     //Get all headers from request
//     console.log("Request headers before modificatiom",req.headers)
//     //Get a header from request
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     console.log(tokenDataInHeaders)
//     //Set a header in request
//     req.headers['month']='June' //req.headers.month = "June"

//     //Set an attribute in request object
//     req.anything = "everything"
    
    
//     console.log("Request headers after modificatiom",req.headers)
    
//     //Set a header in response
//     res.header('year','2022')
//     res.send({msg: "Hi"})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }


// let obj = {
//     "name1" : "Prashant",
//     "city" : "Pune",
//     "address-pincode" : "411037",
//     "age": "25"
// }
// console.log(obj.age)
// console.log(obj[name1])


module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode