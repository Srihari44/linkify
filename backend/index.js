require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const { verifyToken } = require("./utils/auth")
const {registerHandler,loginHandler,resourceHandler}=require("./utils/httpHandlers")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//----------------------------------------------------------------------------------------------------------
// REGISTRATION
//---------------------------------------------------------------------------------------------------------


app.post("/register", registerHandler);

//----------------------------------------------------------------------------------------------------------
// RESOURCE
//---------------------------------------------------------------------------------------------------------


app.post("/app", verifyToken, resourceHandler)

//----------------------------------------------------------------------------------------------------------
// LOGIN
//---------------------------------------------------------------------------------------------------------


app.post("/login", loginHandler)

app.listen(PORT, () => {
  console.log(`Linkify server listening at ${PORT}`);
});
