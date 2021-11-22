require("dotenv").config();
const { PORT } = process.env;
const { createUserData, findUserByEmail } = require("./dbHelper");
const { generateAccessToken } = require("./jwtHelper");
const { verifyToken } = require("./auth")


//---------------------------------------------------------------------------------------
// REGISTRATION HANDLER
//-----------------------------------------------------------------------------------------

const registerHandler = (req, res) => {
    const { name, email, password } = req.body;
    if (!(name, email && password)) {
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
}

//----------------------------------------------------------------------------------------------------------
// LOGIN HANDLER
//---------------------------------------------------------------------------------------------------------

const loginHandler = async (req, res) => {

        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = await findUserByEmail(email);

        try {
            if (user && password == user.password) {
                // Create token
                const token = generateAccessToken({ id: user._id });
                return res.status(200).send({ token });

            }
            res.status(400).send("Invalid Credentials");

        } catch (error) {

            return res.status(code).send({ error });

        }




}


//----------------------------------------------------------------------------------------------------------
// RESOURCE HANDLER
//---------------------------------------------------------------------------------------------------------


const resourceHandler=(req, res) => {

    res.send({ message: "hello world 🎉😂"})
  
  }



  module.exports={registerHandler,loginHandler,resourceHandler};



