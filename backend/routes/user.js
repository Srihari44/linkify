const UserRouter = require("express").Router();

UserRouter.ws("/", (ws, req) => {
  ws.on("message", function (msg) {
    ws.send(msg);
  });
});

module.exports = UserRouter;
