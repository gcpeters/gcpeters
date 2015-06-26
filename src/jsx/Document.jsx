/** @jsx React.DOM */

'use strict';

var React = require('React'),
	_ = require('lodash'),
	$ = require('jquery');

module.exports = React.createClass({
	// Fetch articles using jQuery
	fetchDocument: function () {
		$.ajax({
			url: this.props.slug,
			dataType: 'json',
			cache: false,
			success: this.onDocumentReady,

			error: function(xhr, status, err) {
				console.error && console.error(url, status, err.toString());
			}
		});
	},

	// When we get new data, update the components state, triggering a render
	onDocumentReady: function (document) {
		this.setState(document);
	},

	// Output the article list
	render: function () {
		var state = this.state;

		return (
			<div className="gcp-document">
				<h2>{state.title}</h2>
				<h4>{state.tagLine}</h4>
				<div className="gcp-document-body">{state.body}</div>
			</div>
		);
	},

	// Set defaults
	getInitialState: function() {
		return {
			title: '',
			tagLine: '',
			body: ''
		};
	},

	componentDidMount: function() {
		this.fetchDocument();
	}
});