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
  const requiredFields = ['content', 'title', 'author'];
  for(let i = 0; i < requiredFields.length; i++){
    const field = requiredFields[i];
    if(!(field in req.body)){
      console.error(`Missing ${field} in request body`);
      res.status(400).send(`Missing ${field} in request body`);
    }
  }
  BlogPosts.create(req.body.title, req.body.author, req.body.content);
  res.status(201).send('a okay');
})

router.put('/:id', jsonParser, (req, res) => {
  const requiredFields = ['content', 'title', 'author', 'id'];
  for(let i = 0; i < requiredFields.length; i++){
    const field = requiredFields[i];
    if(!(field in req.body)){
      console.error(`Missing ${field} in request body`);
      res.status(400).send(`Missing ${field} in request body`);
    }
  }
  BlogPosts.update({
    id: req.params.id,
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  })
  res.status(201).send(`updated ${req.body.title} post`);
})

router.delete('/:id', jsonParser, (req, res) => {
    BlogPosts.delete(req.params.id);
    res.status(201).send(`Deleting ${req.params.id}`)
})

module.exports = router;
