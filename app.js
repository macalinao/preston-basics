var express = require('express');
var mongoose = require('mongoose');
var preston = require('preston');

// Let's create a simple app...
var app = express();
mongoose.connect(process.env.MONGOHQ_URI || 'mongodb://localhost:27017');
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
app.use(express.static(__dirname));

var port = process.env.PORT || 3005; // Because the internet
app.listen(port);
console.log('Express server listening on port %d', port);
