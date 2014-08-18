var express = require('express');
var mongoose = require('mongoose');
var preston = require('preston');

// Let's create a simple app...
var app = express.createServer();
var Post = mongoose.model('Post', new mongoose.Schema({
  title: String,
  contents: String
}));

// Used to parse JSON request bodies -- Required
app.use(require('body-parser').json());

// Registers the Post model
preston(Post);

// Adds Preston to the app
app.use('/api', preston.middleware());

// Holds our AngularJS app if we're using that. Completely optional.
app.use(express.static(__dirname + '/public'));

app.listen(3005); // Because the internet