const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Vote
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Post
            .findOneAndUpdate({ _id: req.params.voteId }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}