module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define("borrows", {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    borrowedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shouldReturnOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    bookReturned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    noOfBooks: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Borrow;
};
