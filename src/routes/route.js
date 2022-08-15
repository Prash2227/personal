const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel = require("../models/bookModel")
const bookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )
router.post("/bookUser", bookController.bookUsers)

// router.get("/getUsersData", UserController.getUsersData)
router.get("/getBookUserData", bookController.getBookUserData)


module.exports = router;