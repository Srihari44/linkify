const IndexRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const { createUserData, findUserByEmail } = require("../utils/dbHelper");
const { generateAccessToken } = require("../utils/jwtHelper");
const { findMissingParam } = require("../utils/miscHelper");

IndexRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const { missing, parameter } = findMissingParam({ name, email, password });
  if (missing) {
    return res
      .status(400)
      .json({ error: `${parameter} parameter is required` });
  }
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    } else {
      const passwordHash = bcrypt.hashSync(password, 8);
      const userData = await createUserData({
        name,
        email,
        password: passwordHash,
      });
      const token = generateAccessToken({ id: userData._id });
      return res.status(200).json({ token, userData });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

IndexRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const { missing, parameter } = findMissingParam({ email, password });
  if (missing) {
    return res
      .status(400)
      .json({ error: `${parameter} parameter is required` });
  }
  const userData = await findUserByEmail(email);
  try {
    const isSameHash = bcrypt.compareSync(password, userData.password);
    if (userData && isSameHash) {
      const token = generateAccessToken({ id: userData._id });
      return res.status(200).json({ token, user: userData });
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = IndexRouter;
