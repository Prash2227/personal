const userModel = require('../model/userModel')


const deleteDetails = async function (req, res) {
    try {
        let userId = req.params.userId
        let update = await userModel.findByIdAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
        res.status(202).send(update)
    }
    catch (error) { return res.status(500).send({ message: error.message }) }
}


module.exports.deleteDetails = deleteDetails