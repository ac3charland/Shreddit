import React, { Component } from "react";
import Banner from "../../components/Banner";
import Shred from "../../components/Shred";
//import ShredPlayer from "../../components/ShredPlayer";
import API from "../../utils/API"
import "./Main.css";

class Main extends Component {

    state = {
        shreds: [{id: 1, shred: "Shred1", votes: 120}, {id: 2, shred: "Shred2", votes: 30}, {id: 3, shred:"Shred3", votes: 80}],
    }

    componentDidMount(){
        getAllShreds();
    }

    getAllShreds = () => {
        API.getAllShreds()
            .then(res => this.setState({shreds: res.data}))
            .catch(err => console.log(err));
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

    walkieTalkie = matrix => {
        this.setState({matrix: matrix});
    }

    render(){
        return (
            <div>

                <div>
                    <Banner/>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col s12">
                        {this.state.shreds.length ? (
                            this.state.shreds.map(shred => (
                                <Shred
                                    //key={shred.id}
                                    id={shred.user_id}
                                    //shred={shred.shred}
                                    //votes={shred.votes}
                                    votes= "120"
                                    upvote={this.upvote}
                                    downvote={this.downvote}
                                    walkieTalkie={this.walkieTalkie}
                                    matrix={shred.matrix}
                                    id={shred.user_id}
                                />
                            ))
                        ) : (
                            <h3>No Shreds Posted Yet!</h3>
                        )}
                        
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Main;