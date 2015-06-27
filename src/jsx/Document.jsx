/** @jsx React.DOM */

'use strict';

var React = require('React'),
	_ = require('lodash'),
	$ = require('jquery');

module.exports = React.createClass({
	fetchDocument: function () {
		$.ajax({
			url: ['/api/document/slug', this.props.slug].join('/',
			dataType: 'json',
			cache: false,
			success: this.onDocumentReady,

			error: function(xhr, status, err) {
				console.error && console.error(url, status, err.toString());
			}
		});
	},

	onDocumentReady: function (document) {
		this.setState(document);
	},

	render: function () {
		var state = this.state;

		return (
			<div className="gcp-docjument">
				<h2>{state.title}</h2>
				<h4>{state.tagLine}</h4>
				<div className="gcp-document-body">{state.body}</div>
			</div>
		);
	},

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