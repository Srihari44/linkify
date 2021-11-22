const mongoose = require("mongoose");

const { DB_CONNECTION_STRING } = process.env;

mongoose.connect(DB_CONNECTION_STRING);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userDbRef = mongoose.model("User", UserSchema, "users");

const createUserData = async ({
  name,
  email,
  password,
  successCallback,
  failureCallback,
}) => {
  try {
    const oldUser = await userDbRef.findOne({ email });
    if (oldUser) {
      failureCallback(409, "User Exists");
    } else {
      userDbRef.create({ name, email, password }, (_, user) =>
        successCallback(user)
      );
    }
  } catch (err) {
    console.log(err);
    failureCallback(500, "There was a problem registering the user");
  }
};

const findUserByEmail=async(email)=>{

  return await userDbRef.findOne({ email });

}

module.exports = { createUserData,findUserByEmail };
