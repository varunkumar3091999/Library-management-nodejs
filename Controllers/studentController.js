const db = require("../Modals");

const Students = db.students;

const addStudent = async (req, res) => {
  try {
    const student = await Students.findOne({
      where: {
        studentId: req.body.studentId,
      },
    });

    if (student) {
      return res.status(409).send("Student Already Registered");
    } else {
      await Students.create({ ...req.body });
      return res.status(201).send("Student Created Successfuly!");
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Students.findOne({
      where: {
        studentId: req.body.studentId,
      },
    });

    if (student) {
      await student.destroy();
      return res.status(200).send("Deleted Successfully!");
    } else {
      return res.status(200).send("Student id does not exist!");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addStudent,
  deleteStudent,
};
