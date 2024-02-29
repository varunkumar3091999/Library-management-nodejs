const db = require("../Modals");

const Books = db.books;

const addBook = async (req, res) => {
  try {
    const book = await Books.findOne({
      where: {
        bookName: req.body.bookName,
        author: req.body.author,
        edition: req.body.edition,
      },
    });

    if (book) {
      await book.update({ noOfCopies: book.noOfCopies + req.body.noOfCopies });

      return res.status(200).send("Books Added");
    } else {
      const data = {
        ...req.body,
      };

      await Books.create(data);

      return res.status(200).send("Books Added");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addBook,
};
