const express = require('express');
const router = express.Router();
const Comments = require('../models/comments.js')
const seed = require('../client/data/commentseed.js')

router.get('/', (req, res) => {
    Comments.find({}, (err, comments) => {
        if (err) {
          res.send(err);
        }
        res.json(comments);
    });
});

router.get('/seed', async (req, res) => {
  Comments.create(seed, (err, createdComment) => {
    res.send('Seeded data');
  })
});

module.exports = router;
