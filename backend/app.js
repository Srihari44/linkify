"use strict";
require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { addSocketRef } = require("./middleware/socket");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const { PORT } = process.env;

const app = express();
const httpServer = createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRouter);
app.use(
  "/user",
  (req, _, next) => addSocketRef(httpServer, req, next),
  userRouter
);

httpServer.listen(PORT, () => {
  console.log(`Linkify server listening at ${PORT}`);
});
