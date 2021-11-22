const jwt = require("jsonwebtoken");
const { JWT_TOKEN_SECRET } = process.env;

function generateAccessToken(id) {
  return jwt.sign(id, JWT_TOKEN_SECRET, {
    expiresIn: 86400,
  });
}

const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_TOKEN_SECRET);
};

module.exports = { generateAccessToken, verifyAccessToken };
