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
        post_id: "",
        matrix: this.startingMatrix,
        comments: "",
        //[{user: "Joe", body: "This is amazing! But it's no Cookie Clicker. :'("}, {user: "JR", body: "I might've done things a little differently, but it's not too bad."}, {user: "Zack", body: "I'm sad I got a job because this is so awesome!"}]
        comment: ""
    }

    componentDidMount() {
        const id = this.props.match.params.postId
        
        this.getPostData(id);

    }

    getPostData = (id) => {
        API.getPostShred(id)
            .then(res => {

                const shred = res.data;
                API.getPostComments(id)
                    .then(res => {
                        this.setState({
                            shred: shred,
                            post_id: id,
                            comments: res.data
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
    }

    walkieTalkie = matrix => {
        this.setState({matrix: matrix});
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

    handleInputChange = event => {
        const { name, value } = event.target
        console.log(value)
        this.setState({
            [name]: value
        })
    }

    postComment = event => {

        event.preventDefault();

        let comment = {

            comment: this.state.comment,
            username: localStorage.getItem("username")
        }

        API.postComment(comment, this.state.post_id)
            .then(function(res){
                console.log(res.data)
                window.location.reload()
            })
            .catch(err => console.log(err));

    }

    render(){
        return (
            <>
            <div className="container title">
                <h2>{this.state.shred.username}'s Shred</h2>
                <h5>{this.state.shred.title}</h5>
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

            <div className="container">
                <form>
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field comment-area col s12">
                                    <textarea id="textarea1" className="materialize-textarea" name="comment" value={this.state.comment} onChange={this.handleInputChange}></textarea>
                                    <label for="textarea1">Comment</label>
                                </div>
                            </div>
                        </div>
                        <button onClick={this.postComment} className="btn waves-effect waves-light right postedbtn" type="submit" name="action">
                            Submit <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
            <div>
                {this.state.comments.length ? (
                    this.state.comments.map(comment => (
                        <CommentBox
                            username={comment.username}
                            comment={comment.body}
                        />
                    ))
                    ) : (
                    <h3 className="container defaultText">No comments have been posted yet!</h3>
                )}
            </div>
            
            </>
        )
    }
}

export default Posted;