const express = require("express");
const studentController = require("../Controllers/studentController");
const { addStudent, deleteStudent } = studentController;

const router = express.Router();

router.post("/register", addStudent);
router.delete("/remove", deleteStudent);

module.exports = router;
