const express = require("express");
const genres = require("../models/genreSchema");

const router = express.Router();

// genres routes

router.get("/", (req, res) => {
  res.json({ msg: "get genres" });
});

router.get("/:id", (req, res) => {
  res.send("one genre");
});

router.post("/create-genre", async (req, res) => {
  const { genreName } = req.body;
  console.log(req.body);
  try {
    const genre = await genres.create({ genreName });
    console.log("working");
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.send("delete genre");
});

module.exports = router;
