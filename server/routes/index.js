var express = require('express');
var path = require('path');

var router = express.Router();

var nouns = ['great'];
var adjectives = ['name'];

router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/noun', function(request, response) {
  var random = nouns[Math.floor(Math.random() * nouns.length)];

  response.send(random);
});

router.get('/adjective', function(request, response) {
  var random = adjectives[Math.floor(Math.random() * adjectives.length)];

  response.send(random);
});

module.exports = router;
