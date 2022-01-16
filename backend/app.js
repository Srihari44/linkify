"use strict";
require("dotenv").config();
const express = require("express");
const { PORT } = process.env;
const app = express();
const { verifySocketToken } = require("./middleware/socket");
require("express-ws")(app, undefined, {
  wsOptions: { verifyClient: verifySocketToken },
});
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log(`Linkify server listening at ${PORT}`));

app.use("/", indexRouter);
app.use("/user", userRouter);
