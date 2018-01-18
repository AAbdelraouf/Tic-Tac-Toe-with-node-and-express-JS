var express = require('express');
var app = express();

var port = process.env.PORT || 3000

// app.use(express.static('public'));
// app.use(express.static('aboutPage'));

//calling the about us route
var aboutRoute = require('./aboutPage.js');
app.use('/about', aboutRoute);

var aboutRoute = require('./frontPage.js');
app.use('/', aboutRoute);

// reading files
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/public/HTML/htmlFile.html')  
// });

// setting up the port to listen on
app.listen(port);


