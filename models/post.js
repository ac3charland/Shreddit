var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var post = new Schema ({

    // title: {
    //     type: String,
    //     trim: true,
    //     requried: "You must name your Shred in order to post."
    // },

    matrix: Array, 

<<<<<<< HEAD
    user_id: 
        {
            type: Schema.Types.ObjectId,
            ref: "Users"
    },
=======

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },

    username: {
        type: String
    },

>>>>>>> master
    
    timeStamp: {
        type: Date,
        default: Date.now
    },
    
    votes: {
        type: Number,
        default: 0
    }

    
});

var post = mongoose.model("Post", post);

module.exports = post;