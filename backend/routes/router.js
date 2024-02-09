const express = require('express');

const router = express.Router();

// genres routes

router.get('/api/genres', (req, res) => {
  res.send('all genres');
});

router.get('/api/genres/:id', (req, res) => {
  res.send('one genres');
});

router.post('/api/genres', (req, res) => {
  res.send('post genre');
});

router.delete('/api/genres/:id', (req, res) => {
  res.send('delete genre');
});
