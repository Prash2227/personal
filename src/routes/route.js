const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)
router.get("/getBooksData", BookController.getBooksData)
router.post("/bookList", BookController.bookList)
router.get("/AuthorData", BookController.AuthorData)
router.post("/getBooksInYea", BookController.getBooksInYea)
router.get("/year", BookController.year)
router.post("/getParticularBooks", BookController.getParticularBooks)
router.get("/perticular", BookController.perticular)
router.post("/getXINRBooks", BookController.getXINRBooks)
router.get("/XINRBk", BookController.XINRBk)
router.post("/getRandomBooks", BookController.getRandomBooks)
module.exports = router;