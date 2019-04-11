const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const fs = require('fs');

//url without .html extension
app.use(express.static(__dirname + '/public', { extensions: ['html'] }));

//static folder
app.use(express.static('public'));

// home page
app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/nara-tv.html')
});

//server listening port
app.listen(port);

//errors handling
var errors = require('./errorsHandling');
app.use(errors.onError404);
app.use(errors.onError500);
