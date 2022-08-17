const mongoose = require("mongoose");

const bookCollection = new mongoose.Schema(
  {
    bookName: {
      type: String,
      require: true,
    },
    prices: {
      indianPrice: String,
      europeanPrice: String,
    },
    year: { type: Number, default: 2021 },
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,

    // sales: {type: Number, default: 10}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookCollection);

//1.
// {
//     "msg": {
//       "bookName": "somthing154541",
//       "prices": {
//         "indianPrice": "8999",
//         "europeanPrice": "2449"
//       },
//       "year": 2021,
//       "authorName": "RayMesterio",
//       "totalPages": 992,
//       "stockAvailable": true,
//       "_id": "62fc1aaeaef56e5315738c76",
//       "createdAt": "2022-08-16T22:31:10.768Z",
//       "updatedAt": "2022-08-16T22:31:10.768Z",
//       "__v": 0
//     }
// }

//2.
// "msg": [
//     {
//         "bookName": "LOC",
//         "authorName": "Shree shree shree Prashant Ashok Waghmare"
//     },
//     {
//         "bookName": "Harry potter",
//         "authorName": "XYZe"
//     },
//     {
//         "bookName": "HNM",
//         "authorName": "SHaruk khan"
//     },
//     {
//         "bookName": "SHALA",
//         "authorName": "Mahesh manjrekar"
//     },
//     {
//         "bookName": "RichDadPoorDad",
//         "authorName": "ROBERT"
//     },
//     {
//         "bookName": "IornMan",
//         "authorName": "RDJ"
//     },
//     {
//         "bookName": "Avengers",
//         "authorName": "CHarly"
//     },
//     {
//         "bookName": "EndGame",
//         "authorName": "SHEMONS"
//     },
//     {
//         "bookName": "INcredibleHULK",
//         "authorName": "SHEETAL"
//     },
//     {
//         "bookName": "BlackPanther",
//         "authorName": "Brocklasner"
//     },
//     {
//         "bookName": "CivilWar",
//         "authorName": "CMpunK"
//     },
//     {
//         "bookName": "NoWayHome",
//         "authorName": "RayMesterio"
//     }
// ]
// }

//3.

// "msg": [
//     {
//         "_id": "62fb47ee5589f722e79f69c9",
//         "year": 2032
//     },
//     {
//         "_id": "62fb743dc7a7e8cb9e586e1a",
//         "year": 2032
//     },
//     {
//         "_id": "62fbe75e738993f960adb86c",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe8636bb8be9a55b158b6",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe8936bb8be9a55b158b8",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe8b36bb8be9a55b158ba",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe8d56bb8be9a55b158bc",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe90f6bb8be9a55b158be",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe9326bb8be9a55b158c0",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe9726bb8be9a55b158c2",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe99c6bb8be9a55b158c4",
//         "year": 2021
//     },
//     {
//         "_id": "62fbe9c76bb8be9a55b158c6",
//         "year": 2021
//     }
// ]
// }

//4.

// "msg": [
//     {
//         "_id": "62fb47ee5589f722e79f69c9",
//         "bookName": "LOC",
//         "authorName": "Shree shree shree Prashant Ashok Waghmare",
//         "category": "Online",
//         "year": 2032,
//         "createdAt": "2022-08-16T07:31:58.491Z",
//         "updatedAt": "2022-08-16T07:31:58.491Z",
//         "__v": 0
//     },

//5.

// {
//     "prices": {
//         "indianPrice": "500INR",
//         "europeanPrice": "0.02"
//     },
//     "_id": "62fc0f415167a0092b6092f4",
//     "bookName": "HNM",
//     "year": 2021,
//     "authorName": "SHaruk khan",
//     "totalPages": 9,
//     "stockAvailable": true,
//     "createdAt": "2022-08-16T21:42:25.464Z",
//     "updatedAt": "2022-08-16T21:42:25.464Z",
//     "__v": 0
// }

//6.

// {
//     "prices": {
//         "indianPrice": "1000INR",
//         "europeanPrice": "200"
//     },
//     "_id": "62fc0f825167a0092b6092f6",
//     "bookName": "SHALA",
//     "year": 2021,
//     "authorName": "Mahesh manjrekar",
//     "totalPages": 910,
//     "stockAvailable": true,
//     "createdAt": "2022-08-16T21:43:30.449Z",
//     "updatedAt": "2022-08-16T21:43:30.449Z",
//     "__v": 0
// }
