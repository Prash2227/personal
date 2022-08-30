const userModel = require("../model/userModel")
const bcrypt = require('bcrypt')

const createUser = async function (req, res) {
    try {
        let add = req.body
        let password = add.password
        let saltRounds = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(password, saltRounds)
        add.password = hash
        let data = await userModel.create(add)
        res.status(201).send(data)
    }
    catch (error) { return res.status(500).send({ message: error.message }) }
}

module.exports.createUser = createUser
