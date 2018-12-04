var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var comment = new Schema({
    
    body: {
        type: String,
        trim: true
    },

    user_id: [
        {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    
    timeStamp: {
        type: Date,
        default: Date.now
    },

    post_id: [
        {
            type: Schema.Types.ObjectId,
            ref:"Post"
        }
    ]
});

var comment = mongoose.model("Comment", comment);

module.exports = comment;