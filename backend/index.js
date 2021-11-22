require("dotenv").config();
const express = require("express");
<<<<<<< HEAD
const app = express();
const { PORT } = process.env;
const { createUserData,findUserByEmail } = require("./utils/dbHelper");
=======
const { createUserData } = require("./utils/dbHelper");
>>>>>>> 261bb6fe8c292827b200f82ce7c5cc20ca781787
const { generateAccessToken } = require("./utils/jwtHelper");
const {verifyToken} = require("./utils/auth")

const app = express();
const { PORT } = process.env;
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
  console.log(`Linkify server listening at ${PORT}`);
});
