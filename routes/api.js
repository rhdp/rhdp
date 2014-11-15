var router = require('express').Router(),
    control = require('../db/control');

module.exports = function(io) {

    var api = {
        all: function(req, res, next) {
            console.log(req.method, req.params, req.body, req.query);
            next();
        },
        get: function(req, res) {
            control.get({

            }, function(err, data) {
                res.status(200).send(data);
            });
        },
        post: function(req, res) {
            control.create({

            }, function(err, ents) {
                res.status(200).send(data);
            });
        },
        put: function(req, res) {
            control.update({

            }, {

            }, {
                upsert: true
            }, function(err, affected, data) {
                res.status(200).send(data);
            });
        },
        delete: function(req, res) {
            control.remove({

            }, function(err, data) {
                res.status(204).send(data);
            });
        },
        merge: function(req, res) {
            res.status(200).send('OK');
        },
        patch: function(req, res) {
            res.status(200).send('OK');
        },
        copy: function(req, res) {
            res.status(200).send('OK');
        },
        head: function(req, res) {
            res.status(200).send('OK');
        },
        options: function(req, res) {
            res.status(200).send('OK');
        },
        purge: function(req, res) {
            res.status(200).send('OK');
        },
        lock: function(req, res) {
            res.status(200).send('OK');
        },
        unlock: function(req, res) {
            res.status(200).send('OK');
        },
        propfind: function(req, res) {
            res.status(200).send('OK');
        }
    };

    router
        .all('/', api.all)
        .get('/', api.get)
        .post('/', api.post)
        .put('/', api.put)
        .delete('/', api.delete)
		// .merge('/', api.merge)
		// .patch('/', api.patch)
		// .copy('/', api.copy)
		// .head('/', api.head)
		// .unlock('/', api.unlock)
		// .options('/', api.options)
		// .purge('/', api.purge)
		// .lock('/', api.lock)
		// .propfind('/', api.propfind)
	    ;

    return router;

};
