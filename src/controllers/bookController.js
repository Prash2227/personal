const bookModel = require("../models/bookModel")


const bookUsers = async function(req, res ){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})
}

const getBookUserData = async function(req, res){
    let allBookUsers = await bookModel.find()
    res.send({msg : allBookUsers})
}

module.exports.bookUsers = bookUsers
module.exports.getBookUserData = getBookUserData