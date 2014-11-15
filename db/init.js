var mongoose = require('mongoose');

module.exports = function(database, callback) {
	mongoose.connect('mongodb://localhost/' + database).connection.once('open', callback).on('error', callback);
};
