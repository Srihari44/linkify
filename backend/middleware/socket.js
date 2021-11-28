const { Server } = require("socket.io");

const addSocketRef = (serverRef, req, next) => {
  req.io = new Server(serverRef, { path: "/user/" });
  return next();
};

module.exports = { addSocketRef };
