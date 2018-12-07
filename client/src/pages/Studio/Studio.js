import React, { Component } from "react";
import Banner from "../../components/Banner";
import ShredPlayer from "../../components/ShredPlayer";
import API from "../../utils/API";
import "./Studio.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import  { Redirect } from 'react-router-dom';


class Studio extends Component {

    startingMatrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    // TODO: Update this.state.matrix when user changes shredplayer component

    state = {
        user_id: "user",
        username: "",
        matrix: this.startingMatrix,
        title: "",
        readyToRedirect: false
    }

    //BinaryMath - encoding strings
    encoding = () => {
        let shortenedMatrix = [];

        for (let i = 0; i < this.startingMatrix.length; i++) {
            var matrixString = "";
            for (let j = 0; j < this.startingMatrix[i].length; j++) {
                if (this.startingMatrix[i][j]) {matrixString += "1"}
                else {matrixString += "0"}
            }
            console.log(matrixString);
            shortenedMatrix.push(parseInt(matrixString, 2));
        }
        return shortenedMatrix;
    }

    componentDidMount() {
        const username = localStorage.getItem("username");
        this.setState({username: username});

    }

    walkieTalkie = matrix => {
        this.setState({matrix: matrix});
    }

    save = () => {
        if (this.state.title){
            let shortenedMatrix = this.encoding();
            console.log(shortenedMatrix);
            // before saving to db, make sure saving current matrix
            console.log(this.state.title);
            API.saveShred({
                username: localStorage.getItem("username"),
                matrix: this.state.matrix,
                title: this.state.title
            })
            .then(res => {this.setState({ readyToRedirect: true })})
            .catch(err => console.log(err));
        } else {
            let shortenedMatrix = this.encoding();
            console.log(shortenedMatrix);
            // before saving to db, make sure saving current matrix
            console.log(this.state.title);
            API.saveShred({
                username: localStorage.getItem("username"),
                matrix: this.state.matrix,
            })
            .then(res => {this.setState({ readyToRedirect: true })})
            .catch(err => console.log(err));
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    clear = () => {
        // Set state matrix to 0 matrix
        window.location.reload();
    }

    render(){
        return ( this.state.readyToRedirect?<Redirect to='/Profile'/> : <div>
                <div>
                    <Banner />
                </div>
                <div className="row container title-area">
                    <div className="col s12">
                        <div className="row">
                            <h2 className="col s12">Your Studio</h2>
                        </div>
                        <div className="z-depth-4 shred-area">
                            <div className="row">
                                <div className="col s1"></div>
                                <div className="col s10 shred">
                                <div className="input-field">
                                    <input id="title" type="text" className="validate" name="title" onChange={this.handleInputChange} value={this.state.title}/>
                                    <label htmlFor="title">Title</label>
                                </div>
                                    <ShredPlayer
                                        walkieTalkie={this.walkieTalkie}
                                        matrix={this.state.matrix}
                                        id={this.state.user_id}
                                        title={this.state.title}
                                    />
                                </div>
                                <div className="col s1"></div>
                            </div>
                            <div className="row">
                                <div className="col s12 center-align">
                                    <button class="btn waves-effect waves-light studiobtn" onClick={this.save}>
                                    Save   <i class="fas fa-save"></i>
                                    </button>
                                    <button class="btn waves-effect waves-light studiobtn" onClick={this.clear}>
                                    Clear  <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Studio;