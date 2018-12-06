const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Vote
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    update: function(req, res) {
        db.Post.update(
            { 
                "_id": req.params.voteId, 
                "voters": { "$ne": req.body.username }
            },
            {
                "$inc": { "voteCount": req.body.incdec },
                "$push": { "voters": req.body.username }
            }
        )
        .then(dbModel => console.log(dbModel))
        .catch(err => res.status(422).json(err));
    }
    

}