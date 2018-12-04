import React from "react";
import "./CommentBox.css";

const commentBox = props => (
<div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="Author">{props.username}</span>
                <p class="comment">{props.comment}</p>
            </div>
        </div>
    </div>
</div>
)

export default commentBox;

