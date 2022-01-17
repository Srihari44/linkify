"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
require("./utils/socketHelper").initializeSocket(app);
const { PORT } = process.env;
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log(`Linkify server listening at ${PORT}`));

app.use("/", indexRouter);
app.use("/user", userRouter);
