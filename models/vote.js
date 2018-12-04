var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var vote = new Schema ({

    value: Boolean,

    user_id: [
        {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    ],

    post_id: [
        {
            type: Schema.Types.ObjectId,
            ref:"Post"
        }
    ],

    timeStamp: {
        type: Date,
        default: Date.now
    }
    
});

var vote = mongoose.model("Vote", vote);

module.exports = vote;