var router = require('express').Router();

module.exports = function(io) {

	router
		.use('/', require('./routes/index')(io))
		.use('/api', require('./routes/api')(io));

	return router;

};
