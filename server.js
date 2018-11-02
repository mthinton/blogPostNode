const express = require('express');

const app = express();

const blogRouter = require('./blogRouter');

app.use('/blog-posts', blogRouter )

const listener = app.listen(process.env.PORT || 8080, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
