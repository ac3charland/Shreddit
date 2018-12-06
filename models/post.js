var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var post = new Schema ({

    // title: {
    //     type: String,
    //     trim: true,
    //     requried: "You must name your Shred in order to post."
    // },

    matrix: Array, 


    user_id: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },

    title: {
        type: String,
    },

    username: {
        type: String
    },

    
    timeStamp: {
        type: Date,
        default: Date.now
    },

    voteCount: {
        type: Number,
        default: 0
    },
    
    voters: {
        type: Array,
        default: []
    }

    
});

var post = mongoose.model("Post", post);

module.exports = post;