require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const { createUserData,findUserByEmail } = require("./utils/dbHelper");
const { generateAccessToken } = require("./utils/jwtHelper");
const {verifyToken} = require("./utils/auth")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!(name,email && password)) {
    res.status(400).send("All input is required");
  }
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

app.post("/app",verifyToken,(req,res)=>{

  res.send({message:"hello world 🎉😂",user:req.user})
  
})

app.post("/login",async(req,res)=>{

  const {email,password}=req.body;

  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  const user = await findUserByEmail(email);

  try {
    if (user && password==user.password) {
      // Create token
      const token = generateAccessToken({ id: user._id });
      return res.status(200).send({ token });
  
    }
    res.status(400).send("Invalid Credentials");
    
  } catch (error) {

    return res.status(code).send({ error });
    
  }

  


})



app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
