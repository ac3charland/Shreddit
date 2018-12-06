var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var post = new Schema ({

    // name: {
    //     type: String,
    //     trim: true,
    //     requried: "You must name your Shred in order to post."
    // },

    matrix: Array, 

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },

    username: {
        type: String
    },
    
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