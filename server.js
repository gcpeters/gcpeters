'use strict';

var _ = require('lodash'),
	express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var documentRouter = require('./app/routes/document'),
	twitterRouter = require('./app/routes/twitter'),
	instagramRouter = require('./app/routes/instagram');

var app = express(),
	server;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/document', documentRouter);
app.use('/connectors/twitter-activity', twitterRouter);
app.use('/connectors/instagram-activity', instagramRouter);

mongoose.connect('mongodb://localhost/');

server = app.listen(80, function () {
	console.log('Listening on port %d', server.address().port);
});