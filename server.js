// Get Dependencies
const path = require('path');
const express = require('express');
const app = express();
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const compiler = webpack(config);
const mongoose = require('mongoose');

// Ports
const port = process.env.PORT || 3000;

// Webpack Middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// Middleware BodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware Posts & Comments Controller
const postsController = require('./controllers/PostsController');
app.use('/posts', postsController);
const commentsController = require('./controllers/CommentsController');
app.use('/comments', commentsController);

// Use Client Controller
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connect to mongoose');
})

// Port Listener
app.listen(port, (err) => {
  if (err) {console.log(err)}
  console.log('Listening at http://localhost:3000');
});
