const mongoose = require("mongoose");
const { DB_CONNECTION_STRING } = process.env;

mongoose.connect(DB_CONNECTION_STRING).catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userDbRef = mongoose.model("User", UserSchema, "users");

const findUserByEmail = async (email) => {
  return await userDbRef.findOne({ email });
};

const createUserData = async ({ name, email, password }) => {
  return await userDbRef.create({ name, email, password });
};

module.exports = { createUserData, findUserByEmail };
