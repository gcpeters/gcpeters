var express = require('express'),
	app = express(),
	server;

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

server = app.listen(process.env.PORT || 80, function() {
	console.log('Listening on port %d', server.address().port);
});