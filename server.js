const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./Modals");
const userRoutes = require("./Routes/userRoutes");
const bookRoutes = require("./Routes/bookRoutes");
const studentRoutes = require("./Routes/studentRoutes");
const borrowRoutes = require("./Routes/borrowRoutes");

const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db.sequelize.sync().then(() => {
  console.log("db has been re sync");
});

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/books", borrowRoutes);

app.listen(PORT, () => console.log(`server is connected to port ${PORT}`));
