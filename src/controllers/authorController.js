const bookModel = require('../models/bookModel')
const authorModel =require('../models/authorModel')

//1.
let createBooks = async function(req,res){
    let data = req.body
    let entries = await bookModel.create(data)
    res.send({data:entries})
}

let createAuthor = async function(req,res){
  let  data = req.body
    let entries = await authorModel.create(data)
    res.send({data:entries})
}

//2.
let booksOfChetan = async function(req,res){
  let findauthor = await authorModel.findOne({author_name: "Chetan Bhagat"})
  console.log(findauthor)
let  fetch_id = findauthor.author_id

console.log(fetch_id)
let authorBooks =  await bookModel.find({author_id:fetch_id})
  res.send({data:authorBooks})
}


//3.

//3
let authordetails = async function (req,res){
  
  let update = await bookModel.findOneAndUpdate(
    {name:"Two states"},//condition
      {$set:{price:100}},//update
      {new:true} )//new updated value
      let fetch_id = update.author_id
      console.log(fetch_id)
      
      let authordetails = await authorModel.find({author_id:fetch_id}).select({author_name:1,_id:0})
      let respondsPrice = await bookModel.find({name:"Two states"}).select({price:1,_id:0})

res.send({data:authordetails,respondsPrice})
}

//4.
let range = async function(req,res){
  let booklist = await bookModel.find( { price : { $gte:50,$lte:100 }}).select({author_id:1,_id:0})
  console.log(booklist)
  let details = booklist.map(x=>x.author_id)
  let names = await authorModel.find({author_id:details}).select({author_name:1,_id:0})
      res.send({data:names})
 }
 

module.exports.createBooks = createBooks
module.exports.createAuthor = createAuthor
module.exports.booksOfChetan = booksOfChetan
module.exports.authordetails = authordetails
module.exports.range = range 


