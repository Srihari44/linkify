require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const { createUserData } = require("./utils/dbHelper");
const { generateAccessToken } = require("./utils/jwtHelper");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  createUserData({
    name,
    email,
    password,
    successCallback: (user) => {
      const token = generateAccessToken({ id: user._id });
      return res.status(200).send({ token });
    },
    failureCallback: (code, message) => {
      return res.status(code).send({ error: message });
    },
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
