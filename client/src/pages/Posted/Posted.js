import React, { Component } from "react";
import "./Posted.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import SubmitComment from "../../components/SubmitComment";
// import CommentBox from "../../components/CommentBox";
import Shred from "../../components/Shred";
import API from "../../utils/API";

class Posted extends Component {

    state = {
        shreds: []
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
            <Navbar />
            <div className="container">
                <h2>{this.state.shreds.name}'s Posted Shred</h2>
                <div className="row">
                    <div className="col s12">
                        {this.state.shreds.length ? (
                        this.state.shreds.map(shred => (
                        <Shred
                        key={shred.id}
                        id={shred.id}
                        shred={shred.shred}
                        votes={shred.votes}
                        upvote={this.upvote}
                        downvote={this.downvote}
                        />
                        ))
                        ) : (
                        <h3>Uh-oh! Shred no longer available.</h3>
                        )}
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
                        id={comment.id}
                        username={comment.user}
                        comment={comment.comment}
                        />
                    ))
                    ) : (
                    <h3>No comments have been posted yet!</h3>
                )}
            </div>
            <Footer />
            </>
        )
    }
}

export default Posted;