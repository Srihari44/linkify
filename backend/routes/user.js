const UserRouter = require("express").Router();
const { verifyAuthStatus } = require("../middleware/auth");

UserRouter.all("/*", verifyAuthStatus);

UserRouter.get("/", (req, res) => {
  res.json({ message: "hello world 🎉😂" });
});

module.exports = UserRouter;
