var express = require('express');
var frontPageroute = express.Router();

// reading files on this route
frontPageroute.get('/', function(req, res){
    res.sendFile(__dirname + '/frontPageFiles/tictactoeIndex.html')
    // res.send('Main front page.')
});

//exporting this router to use in main.js
module.exports = frontPageroute;
