var express = require('express'),
    Twit = require('twit'),
	http = require('http'),
	app = express(),
	twit,
	server;

twit = new Twit({
	consumer_key: 'YgtLZzwULKFFkIHP67oj6pKVw',
	consumer_secret: 'lMVjabxAFl0A353IuvK6gZoarrzWPzBlo4ATfo4xh9EAwBXfIy',
	access_token: '16514015-dA2tUX5swRxyKzy8LU3SFXDQpcqfgO8rKkAXQ8OJV',
	access_token_secret: '5HYsGcQbn7gwpytLHitZBWkLY67Qtc9UMJTCJeTvGf29D'
});

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/connectors/twitter-activity', function (req, res) {
	twit.get('statuses/user_timeline', function (err, data, response) {
		if (err) {

			console.log(err);
			return;
		}

		res.send(data);
	});
});

server = app.listen(80, function () {
	console.log('Listening on port %d', server.address().port);
});