const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')


const midWare1 = async function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"]
    if (!token) { return res.status(401).send("Header is missing") }
    let decodedToken = jwt.verify(token, "I am learning the creation of jwt")
    if (!decodedToken) { return res.status(401).send("Not a valid token") }
    let user = decodedToken.userID
    let userId = req.params.userId
    if(user != userId){ return res.status(403).send("You are not authorized to do this.")}
    let idCheck = mongoose.Types.ObjectId.isValid(userId)
    if (!idCheck) { return res.status(400).send("Not a valid userID") }
    let check = await userModel.findById(userId)
    if (!check) { return res.status(404).send("No such user exist") }
    next()
  }
  catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports.midWare1 = midWare1



