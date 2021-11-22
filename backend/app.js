require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const app = express();
const { PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Linkify server listening at ${PORT}`);
});
