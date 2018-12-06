const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Post
            .find(req.query)
            .sort({votes: -1})
            .populate('comment')
            .populate('vote')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Post
            .findById(req.params.postId)
            .populate({
                path: 'comment',
                populate: { path: 'Users' }
            })
            .populate('vote')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Post
            .create({
                user_id: req.body.user_id,
                username: req.body.username,
                matrix: req.body.matrix
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Post
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Post
            .findById({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}