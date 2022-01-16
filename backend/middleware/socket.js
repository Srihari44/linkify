const { verifyAccessToken } = require("../utils/jwtHelper");

const verifySocketToken = (info, cb) => {
  const queryParams = "?" + info.req.url.split("?").slice(1);
  const qs = new URLSearchParams(queryParams);
  const token = qs.get("token");
  if (!token) cb(false, 401, "Unauthorized");
  else {
    try {
      verifyAccessToken(token);
      cb(true);
    } catch {
      cb(false, 401, "Unauthorized");
    }
  }
};

module.exports = { verifySocketToken };
