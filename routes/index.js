var router = require('express').Router(),
	control = require('../db/control');

module.exports = function(io) {

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

				});
		});
	});

	return router;

}
