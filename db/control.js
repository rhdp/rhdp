var db = require('./model');

module.exports = {
	get: function(condition, callback) {
		db.Model.find(condition, callback);
	},
	create: function(document, callback) {
		new db.Model(document).save(callback);
	},
	update: function(condition, document, options, callback) {
		db.Model.update(condition, document, options, callback);
	},
	remove: function(condition, callback) {
		db.Model.find(condition).remove(callback);
	}
}
