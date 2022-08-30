const userModel = require('../model/userModel')


const userDetails = async function (req, res) {
    try {
        let userId = req.params.userId
        let getDetails = await userModel.findById(userId)
        res.status(200).send(getDetails)
    }
    catch (error) { return res.status(500).send({ message: error.message }) }
}

module.exports.userDetails = userDetails