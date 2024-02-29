const express = require("express");
const db = require("../Modals");

const Users = db.users;

const saveUser = async (req, res, next) => {
  try {
    const userName = await Users.findOne({
      where: {
        userName: req.body.userName,
      },
    });

    if (userName) {
      return res.status(409).send("User Name is already Taken!");
    }

    const emailCheck = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (emailCheck) {
      return res.status(409).send("Email is already Taken!");
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  saveUser,
};
