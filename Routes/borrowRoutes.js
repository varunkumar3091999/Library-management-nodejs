const express = require("express");
const borrowsController = require("../Controllers/borrowController");

const { borrowBook } = borrowsController;

const router = express.Router();

router.post("/newBorrow", borrowBook);

module.exports = router;
