const bcrypt = require("bcrypt");
const db = require("../Modals");
const jwt = require("jsonwebtoken");

const User = db.users;

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const data = {
      userName,
      email,
      password: await bcrypt.hash(password, 10),
    };

    const user = await User.create(data);

    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });

      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details Not proper");
    }
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie = res.cookie("jwt", token, {
          maxAge: 1 * 24 * 60 * 60,
          httpOnly: true,
        });

        return res.status(200).send(user);
      } else {
        return res.status(401).send("Authentication Failed");
      }
    } else {
      return res.status(401).send("Authentication Failed");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signup,
  login,
};
