require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/router");

const app = express();
app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api", router);

app.use("/", cors(), (req, res) => {
  res.status(200).json({ msg: "welcome" });
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
