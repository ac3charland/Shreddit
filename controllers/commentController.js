const db = require("../models");

module.exports = {
    findById: function(req,res){
        db.Comment
            .find(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        db.Comment
            .create({
                body: req.body.comment,
                username: req.body.username,
                post_id: req.params.postId
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByPostId: function(req, res) {
        db.Comment
            .find({'post_id': req.params.postId})
            .sort({timeStamp: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req,res) {
        db.Comment
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};