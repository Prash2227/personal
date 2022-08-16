const { count } = require("console");
const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  res.send({ msg: allBooks });
};

const bookList = async function (req, res) {
  let data1 = req.body;
  let allData = await BookModel.create(data1);
  res.send({ msg: allData });
};

const AuthorData = async function (req, res) {
  let allAuthorData = await BookModel.find()
    .sort()
    .select({ bookName: 1, authorName: 1, _id: 0 });
  res.send({ msg: allAuthorData });
};

const getBooksInYea = async function (req, res) {
  let whichYear = await BookModel.find().sort().select({ year: 1, _id: 0 });
  res.send({ msg: whichYear });
};

const year = async function (req, res) {
  res.send();
};

const getParticularBooks = async function (req, res) {
  let boook = await BookModel.find(req.body);
  res.send({ msg: boook });
};

const perticular = async function (req, res) {
  res.send();
};

const getXINRBooks = async function (req, res) {
  let savedData = await BookModel.find({
    "prices.indianPrice": { $in: ["100INR", "500INR", "1000INR"] },
  }); //.count()
  res.send({ msg: savedData });
};
const XINRBk = async function (req, res) {
  res.send();
};

const getRandomBooks  = async function(req,res){
    let savedData = await BookModel.find({
        $or: [{stockAvailable:1 , totalPages: {$gt: 500}}]
    })
    res.send({msg: savedData})
}

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.bookList = bookList;
module.exports.AuthorData = AuthorData;
module.exports.getBooksInYea = getBooksInYea;
module.exports.year = year;
module.exports.getParticularBooks = getParticularBooks;
module.exports.perticular = perticular;
module.exports.getXINRBooks = getXINRBooks;
module.exports.XINRBk = XINRBk;
module.exports.getRandomBooks = getRandomBooks
