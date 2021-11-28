const socketioJwt = require("socketio-jwt");
const { JWT_TOKEN_SECRET } = process.env;

const verifySocketToken = () => {
  return socketioJwt.authorize({
    secret: JWT_TOKEN_SECRET,
    timeout: 15000,
    handshake: true,
    auth_header_required: true,
  });
};

module.exports = { verifySocketToken };
