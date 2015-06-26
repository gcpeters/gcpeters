var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Document = require('../models/Document.js');

function getQueryHandler (res, next) {
	return function (error, content) {
		if (error) {

			return next(error);
		}
 
		if (_.isEmpty(content)) {

			// HTTP status 404: NotFound
			return res.status(404).send('Not found');
		}

		res.json(content);
	};
}

/* GET /document listing. */
router.get('/', function (req, res, next) {
	Document.find(getQueryHandler(res, next));
});

/* GET /document/id */
router.get('/:id', function (req, res, next) {
	Document.findById(req.params.id, getQueryHandler(res, next));
});

/* GET /document/slug */
router.get('/slug/:slug', function (req, res, next) {
	Document.find({
		slug: req.params.slug
	}, getQueryHandler(res, next));
});

/* POST /document */
router.post('/', function (req, res, next) {
	Document.create(req.body, getQueryHandler(res, next));
});

/* PUT /document/:id */
router.put('/:id', function (req, res, next) {
	Document.findByIdAndUpdate(req.params.id, req.body, getQueryHandler(res, next));
});

/* DELETE /document/:id */
router.delete('/:id', function (req, res, next) {
	Document.findByIdAndRemove(req.params.id, req.body, getQueryHandler(res, next));
});

module.exports = router;