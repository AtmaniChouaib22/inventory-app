require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/router");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/genres", router);

app.get("/", (req, res) => {
  res.send("hello world");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`server listening on ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
