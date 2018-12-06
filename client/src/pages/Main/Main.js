import React, { Component } from "react";
import Banner from "../../components/Banner";
import Shred from "../../components/Shred";
//import ShredPlayer from "../../components/ShredPlayer";
import API from "../../utils/API"
import "./Main.css";

class Main extends Component {

    state = {
        shreds: [
            //{id: 1, shred: "Shred1", votes: 120}, {id: 2, shred: "Shred2", votes: 30}, {id: 3, shred:"Shred3", votes: 80}
        ],
        username: ""
    }

    componentDidMount(){
        this.getAllShreds();
        this.decoding();        
        const username = localStorage.getItem("username");
        this.setState({username: username})
    }

    getAllShreds = () => {
        return API.getAllShreds()
            .then(res => {
                console.log(res.data);
                this.setState({shreds: res.data})
            })
            .catch(err => console.log(err));
    }

    vote = (id, incdec) => {
        let user = this.state.username

        let data = {
            incdec: incdec,
            username: user
        }

        API.vote(data, id)
            .then(() => this.getAllShreds())
            .catch(err => console.log(err));
    }

    walkieTalkie = matrix => {
        this.setState({matrix: matrix});
    }

    //Binary Math: decoding strings
    decoding = () => {
        //dummy shortened matrix
        var fakeSong = [0, 512, 2146, 0, 8, 32];
        var decodedMatrix = [];

        for (let i = 0; i < fakeSong.length; i++) {
            var matrixRow = fakeSong[i].toString(2).split('').map(function(x) {
                return parseInt(x);
            })

            while (matrixRow.length < 16) {
                matrixRow.unshift(0);
            }

            while (matrixRow.length > 16) {
                matrixRow.shift();
            }

            decodedMatrix.push(matrixRow);
            console.log(decodedMatrix);
        }
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
                                    key={shred._id}
                                    id={shred._id}
                                    user_id={shred._id}
                                    shred_id={shred._id}
                                    votes={shred.voteCount}
                                    vote={this.vote}
                                    title={this.title}
                                    walkieTalkie={this.walkieTalkie}
                                    matrix={shred.matrix}
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