const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./models');

BlogPosts.create('Then there were none', 'Once upon a time there was a hella' +
'crazy story about a dude', 'Matt');

router.get('/', (req, res) => {
  res.json(BlogPosts.get());
})

router.post('/', jsonParser, (req, res) => {

})

module.exports = router;
