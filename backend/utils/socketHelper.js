const { verifySocketToken } = require("../middleware/socket");

const initializeSocket = (app) => {
  return require("express-ws")(app, undefined, {
    wsOptions: { verifyClient: verifySocketToken },
  });
};

module.exports = { initializeSocket };
