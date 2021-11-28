const UserRouter = require("express").Router();
const { verifySocketToken } = require("../utils/socketHelper");

UserRouter.get("/", (req, res) => {
  const io = req.io;
  io.use(verifySocketToken);
  io.on("connection", (socket) => {
    console.log("hello!");
  });
});

module.exports = UserRouter;
