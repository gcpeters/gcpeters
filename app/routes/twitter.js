'use strict';

var express = require('express'),
	router = express.Router(),
	Twit = require('twit'),
	twit = new Twit({
		consumer_key: 'YgtLZzwULKFFkIHP67oj6pKVw',
		consumer_secret: 'lMVjabxAFl0A353IuvK6gZoarrzWPzBlo4ATfo4xh9EAwBXfIy',
		access_token: '16514015-dA2tUX5swRxyKzy8LU3SFXDQpcqfgO8rKkAXQ8OJV',
		access_token_secret: '5HYsGcQbn7gwpytLHitZBWkLY67Qtc9UMJTCJeTvGf29D'
	});


router.get('/', function (req, res) {
	twit.get('statuses/user_timeline', function (err, data, response) {
		if (err) {

			console.log(err);
			return;
		}

		res.send(data);
	});
});

module.exports = router;