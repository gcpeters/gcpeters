'use strict';

// modules
var _ = require('lodash'),
	http = require('http'),
	express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	favicon = require('serve-favicon');

// Routers
var documentRouter = require('./app/routes/document'),
	twitterRouter = require('./app/routes/twitter'),
	instagramRouter = require('./app/routes/instagram');

var app = express(),
	server;

function dir (name) {
	return [__dirname, name].join('/');
}

app.use(bodyParser.json());
app.use(express.static(dir('/public')));
app.use(favicon(dir('/public/favicon.ico')));

// Routers
app.use('/api/document', documentRouter);
app.use('/connectors/twitter-activity', twitterRouter);
app.use('/connectors/instagram-activity', instagramRouter);

mongoose.connect('mongodb://localhost/');

server = http.createServer(app);
server.listen(80, function () {
	console.log('Listening on port 80');
});