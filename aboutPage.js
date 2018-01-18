var express = require('express');
var router = express.Router();


// reading files on this route
router.get('/', function(req, res){
    res.sendFile(__dirname + '/aboutPage/HTML/aboutPageHTML.html')
    // res.send('About us page.')
});

//exporting this router to use in main.js
module.exports = router;
