module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("students", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dob: {
      type: DataTypes.DATE,
    },
  });

  return Student;
};
