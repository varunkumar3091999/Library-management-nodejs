const db = require("../Modals");

const Borrow = db.borrows;
const Book = db.books;
const Student = db.students;

const borrowBook = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        id: req.body.bookId,
      },
    });
    const student = await Student.findOne({
      where: {
        studentId: req.body.studentId,
      },
    });

    if (student && book) {
      var today = new Date();
      var shouldReturnOn = new Date();
      shouldReturnOn.setDate(today.getDate() + 10);

      const data = {
        studentId: student.studentId,
        bookId: book.id,
        borrowedDate: today,
        shouldReturnOn,
        bookReturned: req.body.bookReturned,
        noOfBooks: req.body.noOfBooks,
      };

      await Borrow.create(data);
      console.log(book, "bookkkkk");
      await book.update({ noOfCopies: book.noOfCopies - req.body.noOfBooks });
      return res.status(201).send("Book Borrowed Registered");
    }

    if (!student) {
      return res.status(200).send("Student Not Found");
    }
    if (!book) {
      return res.status(200).send("Book Not Found");
    }
  } catch (err) {
    console.log(err);
  }
};

const returnBook = async (req, res) => {};

module.exports = {
  borrowBook,
};
