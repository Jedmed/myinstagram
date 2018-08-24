const express = require('express');
const router = express.Router();
const Posts = require('../models/posts.js')
const seed = require('../client/data/postseed.js')

router.get('/', (req, res) => {
    Posts.find({}, (err, posts) => {
        if (err) {
          res.send(err);
        }
        res.json(posts);
    });
});

router.get('/seed', async (req, res) => {
  Posts.create(seed, (err, createdPost) => {
    res.send('Seeded data');
  })
});

module.exports = router;
