const userModel = require("../model/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const loginUser = async function (req, res) {
    try {
        let { emailId } = req.body
        let { password } = req.body
        let userCheck = await userModel.findOne({ emailId: emailId })
        if (!userCheck) { return res.status(400).send("Incorrect userID or password.") }
        let comparePass = await bcrypt.compare(password, userCheck.password)
        if (!comparePass) { return res.status(400).send("Incorrect userID or password.") }
        let token = jwt.sign(
            {
                userID: userCheck._id.toString(),
                platform: "education"
            },
            "I am learning the creation of jwt"
        )
        res.status(201).send({ status: true, token: token })
    }
    catch (error) { return res.status(500).send({ message: error.message }) }

}

module.exports.loginUser = loginUser



const createOrder = async function (req, res) {
    try {
        let body = req.body
        let userID = body.userId
        let proID = body.productId
        let ObjectId = mongoose.Types.ObjectId
        console.log("this is the console of obj", ObjectId)
        if (!ObjectId.isValid(userID)) {
            throw new Error("wrong syntax")
        }
        let userIdCheck = await userModel.findById(userID)
        let proIdCheck = await productModel.findById(proID)
        if (!userIdCheck) {
            return res.send("Not a valid user ID")
        } else if (!proIdCheck) {
            return res.send("Not a valid product ID")
        } else {
            if (body.isFreeAppUser == false) {
                let proPri = proIdCheck.price
                let bal = userIdCheck.balance
                if (bal < proPri) {
                    return res.send("Insufficient balance in your account to place the order.")
                } else { let balUpd = await userModel.findByIdAndUpdate(userID, { balance: bal - proPri }) }
            }
            let crtOrder = await orderModel.create(body)
            return res.send(crtOrder)
        }
    } catch (error) {
        return res.status(400).send({ msg: error.message })
    }
}