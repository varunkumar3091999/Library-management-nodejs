const db = require("../Modals");

const Books = db.books;

// const addBook = async (req, res, next) => {
//   try {
//     const book = await Books.findOne({
//       where: {
//         bookName: req.body.bookName,
//         author: req.body.bookName,
//         edition: req.body.edition,
//       },
//     });

//     if(book) {

//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
