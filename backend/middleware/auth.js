const { verifyAccessToken } = require("../utils/jwtHelper");

const verifyAuthStatus = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ error: "Unauthorized access" });
  }
  try {
    token = token.split("Bearer ")[1];
    const status = verifyAccessToken(token);
    req.user = status;
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }

  return next();
};

module.exports = { verifyAuthStatus };
