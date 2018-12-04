import React, { Component } from "react";
import "./Posted.css";
import SubmitComment from "../../components/SubmitComment";
import CommentBox from "../../components/CommentBox";
import Shred from "../../components/Shred";
import API from "../../utils/API";

class Posted extends Component {

    state = {
        shreds: {id: 1, name: "Person", shred: "Shred1", votes: 120, comments: [{user: "Joe", body: "This is amazing! But it's no Cookie Clicker. :'("}, {user: "JR", body: "I might've done things a little differently, but it's not too bad."}, {user: "Zack", body: "I'm sad I got a job because this is so awesome!"}]}
    }

    upvote = (id, votes) => {
        let newVotes = votes + 1;
        API.vote(newVotes, id)
            .then(console.log("upvoted #" + id))
            .catch(err => console.log(err));
    }

    downvote = (id, votes) => {
        let newVotes = votes - 1;
        API.vote(newVotes, id)
        .then(console.log("downvoted #" + id))
        .catch(err => console.log(err));

    }

    render(){
        return (
            <>
            <div className="container">
                <h2>{this.state.shreds.name}'s Shred</h2>
                <div className="row">
                    <div className="col s12">
                        {this.state.shreds.shred}
                    </div>
                </div>
            </div>

            <div>
                <SubmitComment />
            </div>
            <div>
                {this.state.shreds.comments.length ? (
                    this.state.shreds.comments.map(comment => (
                        <CommentBox
                        username={comment.user}
                        comment={comment.body}
                        />
                    ))
                    ) : (
                    <h3>No comments have been posted yet!</h3>
                )}
            </div>
            </>
        )
    }
}

export default Posted;