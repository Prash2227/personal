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
  let allAuthorData = await BookModel.find()
    .sort()
    .select({ bookName: 1, authorName: 1, _id: 0 });
  res.send({ msg: allAuthorData });
};

const getBooksInYear = async function (req, res) {
  let year = req.body.year;
  let whichYear = await BookModel.find({ year: year });
  res.send({ msg: whichYear });
};

const getParticularBooks = async function (req, res) {
  let boook = await BookModel.find({ authorName: "SHaruk khan" });
  res.send({ msg: boook });
};
const getXINRBooks = async function (req, res) {
  let savedData = await BookModel.find({
    "prices.indianPrice": { $in: ["100INR", "500INR", "1000INR"] },
  });
  res.send({ msg: savedData });
};
const getRandomBooks = async function (req, res) {
  let savedData = await BookModel.find({
    $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],
  });
  res.send({ msg: savedData });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
