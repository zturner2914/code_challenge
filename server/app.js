var express = require('express');
var goodMovies = require('../models/good');
var badMovies = require('../models/bad');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/views/index.html')
});

app.get('/goodMovies', function(req, res){
    res.send(goodMovies);
});

app.get('/badMovies', function(req, res){
    res.send(badMovies);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;