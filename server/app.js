var express = require('express');
var demData = require('../models/dems');
var repData = require('../models/reps');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/views/index.html')
});

app.get('/getDems', function(req, res){
    res.send(demData);
});

app.get('/getReps', function(req, res){
    res.send(repData);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;