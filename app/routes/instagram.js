'use strict';

var express = require('express'),
	router = express.Router(),
	superagent = require('superagent'),
	instagram = {
		clientID: 'ce433583fb924454a885eb5ad4b222e7',
		userID: '26330140',
		endpoints: {
			search: 'https://api.instagram.com/v1/users/{{userID}}/media/recent/?client_id={{clientID}}',
			user: 'https://api.instagram.com/v1/users/{{userID}}/?access_token={{accessToken}}'
		}
	};


router.get('/', function (req, res) {
	var instagramEndpoint = instagram.endpoints.search
		.replace(/\{\{userID}}/, instagram.userID)
		.replace(/\{\{clientID}}/, instagram.clientID);

	superagent.get(instagramEndpoint)
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

module.exports = router;