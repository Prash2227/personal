const mongoose = require("mongoose")
// const userModel1 = require("./userModel1")
const  objectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
	userId:{
        type: objectId,
        ref :"userDoC"
    },
	productId: {
        type: objectId,
        ref : "product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String
}, {timestamps: true})

module.exports= mongoose.model('order', orderSchema)