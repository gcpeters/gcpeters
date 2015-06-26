'use strict';

var mongoose = require('mongoose'),
	DocumentSchema = new mongoose.Schema({
		id: {
			type: mongoose.Schema.Types.ObjectId,
			index: true
		},
		isHomePage: {
			type: Boolean,
			index: true
		},
		slug: {
			type: String,
			index: true
		},
		title: {
			type: String,
			index: true
		},
		tagLine: {
			type: String,
			index: true
		},
		body: {
			type: String,
			index: true
		}
	});

module.exports = mongoose.model('Document', DocumentSchema);