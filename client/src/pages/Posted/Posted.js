import React, { Component } from "react";
import "./Posted.css";
import SubmitComment from "../../components/SubmitComment";
import CommentBox from "../../components/CommentBox";
import ShredPlayer from "../../components/ShredPlayer";
import API from "../../utils/API";

class Posted extends Component {

    startingMatrix = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    ]

    state = {
        shred: false,
        user_id: "Person",
        // post_id: window.location.href.substring(window.location.href.indexOf("posted/") + 7),
        matrix: this.startingMatrix,
        comments: [{user: "Joe", body: "This is amazing! But it's no Cookie Clicker. :'("}, {user: "JR", body: "I might've done things a little differently, but it's not too bad."}, {user: "Zack", body: "I'm sad I got a job because this is so awesome!"}],
        comment: ""
    }

    componentDidMount() {
        const id = this.props.match.params.postId
        
        this.getPostShred(id);

    }

    getPostShred = (id) => {
        API.getPostShred(id)
            .then(res => {
                console.log(res.data);
                this.setState({shred: res.data})
            })
            .catch(err => console.log(err));
    }

    walkieTalkie = matrix => {
        this.setState({matrix: matrix});
    }

    // cellphone = comment => {
    //     API.postComment({ comment: comment }, props.match.params.postId)
    // }

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

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    postComment = event => {

        event.preventDefault();

        let comment = {
            comment: this.state.comment
        }

        API.postComment
            .then(function(res){
                console.log(res.data.comment)
            })

    }

    render(){
        return (
            <>
            <div className="container">
                <h2>{this.state.shred.username}'s Shred</h2>
                <div className="row">
                    <div className="col s12">
                    {this.state.shred ? (
                        <ShredPlayer
                            walkieTalkie={this.walkieTalkie}
                            matrix={this.state.shred.matrix}
                            id={this.state.user_id}
                        />
                    ) : ("No Shred")}
                    </div>
                </div>
            </div>

            <div>
                <SubmitComment 
                cellphone={this.cellphone}
                onChange={this.handleInputChange}
                postComment={this.postComment}
                />
            </div>
            <div>
                {this.state.comments.length ? (
                    this.state.comments.map(comment => (
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