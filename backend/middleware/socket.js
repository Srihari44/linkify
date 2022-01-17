const { verifyAccessToken } = require("../utils/jwtHelper");
const { SOCKET_ROUTES } = process.env;

const verifySocketToken = (info, cb) => {
  const [route, ...queryItems] = info.req.url.split("?");
  const queryParams = "?" + queryItems[0];
  const qs = new URLSearchParams(queryParams);
  const token = qs.get("token");
  const allowedRoute = SOCKET_ROUTES.includes(route);
  if (!token || !allowedRoute) cb(false, 401, "Unauthorized");
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
