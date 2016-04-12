var express = require('express');
var mongoose = require('mongoose');

// Declare routes
var index = require('./routes/index');

var app = express();

app.use(express.static('server/public'));

// routes
app.use('/', index);

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});
