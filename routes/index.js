var router = require('express').Router(),
	control = require('../db/control'),
	shimArticles = require('../util/entries').articles;

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

			var i = 0;
			for (var a in shimArticles) {
				setTimeout((function(a) {
					return function() {
						socket.emit('server.article', a);
					}
				})(shimArticles[a]), i += 10);
			}
		});
	});

	return router;

}
