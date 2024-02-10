const express = require("express");
const {
  genre_list,
  genre_delete,
  genre_post,
  genre_one,
} = require("../controllers/genreController");
const {
  games_list,
  game_one,
  game_post,
  game_delete,
} = require("../controllers/gamesController");
const { dev_post } = require("../controllers/developpersController");

const router = express.Router();

// genres routes

router.get("/genres", genre_list);

router.get("/genres/:id", genre_one);

router.post("/genres", genre_post);

router.delete("/genres/:id", genre_delete);

// games routes

router.get("/games", games_list);

router.get("/games/:id", game_one);

router.post("/games", game_post);

router.delete("/games/:id", game_delete);

// dev routes

router.get("/developpers", games_list);

router.get("/developpers/:id", game_one);

router.post("/developpers", dev_post);

router.delete("/developpers/:id", game_delete);

module.exports = router;
