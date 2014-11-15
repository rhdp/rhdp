var router = require('express').Router(),
	control = require('../db/control');

module.exports = function(io) {

	var shimArticles = [
		{
			title: 'Test 1',
			md: '# Hello'
		},
		{
			title: 'Test 2',
			md: '# Testing'
		},
		{
			title: 'Test 3',
			md: '# Test Test\n## Testing'
		},
		{
			title: 'An Article',
			md: '# Test Test Article\n## Testing'
		},
		{
			title: 'Yay',
			md: '# Hello\nThis is a test'
		}
	];

	router.get('/', function(req, res) {
		res.render('index', {

		});
	});

	io.on('connection', function(socket) {
		socket.on('init', function(data) {
			socket
				.emit('response', {

				})
				.on('disconnect', function() {

				})
				.emit('server.articles', shimArticles);
		});
	});

	return router;

}
