$(document).ready(function() {
	var socket = io.connect(),
		T = templatizer;

	socket
		.emit('init', {

		})
		.on('response', function(data) {

		});
});
