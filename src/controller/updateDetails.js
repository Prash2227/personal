const userModel = require('../model/userModel')


const updateDetails = async function (req, res) {
    try {
        let userId = req.params.userId
        let add = req.body
        let update = await userModel.findByIdAndUpdate({ _id: userId }, add,  { new: true })
        res.status(202).send(update)
    }
    catch (error) { return res.status(500).send({ message: error.message }) }
}

module.exports.updateDetails = updateDetails