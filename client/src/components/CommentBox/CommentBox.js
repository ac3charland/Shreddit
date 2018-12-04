import React from "react";
import "./CommentBox.css";

const commentBox = props => (
<div className="container">
    <div className="col s12">
        <div className="card">
            <div className="card-content">
                <h5><span className="Author">{props.username}</span></h5>
                <hr></hr>
                <p className="comment">{props.comment}</p>
            </div>
        </div>
    </div>
</div>
)

export default commentBox;

