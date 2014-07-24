var express = require('express'),
    Twit = require('twit'),
	superagent = require('superagent'),
	app = express(),
	twit,
	server,
	instagramEndpoints;

instagram = {
	clientID: 'ce433583fb924454a885eb5ad4b222e7',
	userID: '26330140',
	endpoints: {
		search: 'https://api.instagram.com/v1/users/{{userID}}/media/recent/?client_id={{clientID}}',
		user: 'https://api.instagram.com/v1/users/{{userID}}/?access_token={{accessToken}}'
	}
};

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

app.get('/connectors/instagram-activity', function (req, res) {
	superagent.get(instagram.endpoints.search.replace(/\{\{userID}}/, instagram.userID).replace(/\{\{clientID}}/, instagram.clientID))
		.set({
			Accept: 'application/json'
		})
		.end(function (err, response) {
			if (err) {

				console.log(err);
				return;
			}

			res.send(response.body);
		});
});

server = app.listen(8080, function () {
	console.log('Listening on port %d', server.address().port);
});