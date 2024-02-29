const express = require("express");
const userController = require("../Controllers/bookController");
const { addBook } = userController;

const router = express.Router();

router.post("/add", addBook);

module.exports = router;
