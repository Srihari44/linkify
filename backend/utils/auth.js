
require("dotenv").config();
const jwt = require("jsonwebtoken");

const { TOKEN_SECRET } = process.env;




const verifyToken = (req, res, next) => {

    const  token  = req.headers.authorization;
    if (!token) {
        return res.status(403).send("A token is required for authentication");

    }

    try {

        const status = jwt.verify(token, TOKEN_SECRET);
        // return res.status(200).send({ status ,message:"hello 🎉😂😂"})
        req.user=status

    } catch (error) {

        return res.status(401).send({ status: "you can not be authenticated" })


    }


    return next();


}

module.exports = { verifyToken };