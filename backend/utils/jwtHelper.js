require("dotenv").config();
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = process.env;

function generateAccessToken(id) {
  return jwt.sign(id, TOKEN_SECRET, {
    expiresIn: 86400, // expires in 24 hours
  });
}

module.exports = { generateAccessToken };
