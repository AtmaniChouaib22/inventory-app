const express = require("express");
const {
  genre_list,
  genre_delete,
  genre_post,
  genre_one,
  genreList,
} = require("../controllers/genreController");
const {
  games_list,
  game_one,
  game_post,
  game_delete,
  game_update,
} = require("../controllers/gamesController");
const {
  dev_post,
  dev_delete,
  dev_one,
  dev_list,
  devList,
} = require("../controllers/developersController");

const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../app/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// genres routes
router.get("/genres/all", genreList);

router.get("/genres", genre_list);

router.get("/genres/:id", genre_one);

router.post("/genres", genre_post);

router.delete("/genres/:id", genre_delete);

// games routes

router.get("/games", games_list);

router.get("/games/:id", game_one);

router.post("/games", upload.single("picture"), game_post);

router.delete("/games/:id", game_delete);

router.patch("/games/:id", upload.single("picture"), game_update);

// dev routes

router.get("/developers/all", devList);

router.get("/developers", dev_list);

router.get("/developers/:id", dev_one);

router.post("/developers", dev_post);

router.delete("/developers/:id", dev_delete);

module.exports = router;
