module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noOfPages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    noOfCopies: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    edition: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Book;
};
