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
        redirectToProfile: false,
        redirectToHome: false
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

        // Get current component to have 'this' in sticky scope area
        const cc = this;

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
            .then(res => {this.setState({ redirectToProfile: true })})
            .catch(err => console.log(err));
        } else {
            let shortenedMatrix = this.encoding();
            console.log(shortenedMatrix);
            // before saving to db, make sure saving current matrix
            console.log(this.state.title);

            // Get token from localStorage
            let token = localStorage.getItem("token");

            // Check current route to authorize, save shred or redirect to log in
            API.current(token)
            .then(function(res) {
                if (res.data.user.token) {
                    API.saveShred({
                        username: localStorage.getItem("username"),
                        matrix: cc.state.matrix,
                        title: cc.state.title
                    })
                    .then(res => {cc.setState({ redirectToProfile: true })})
                    .catch(err => console.log(err));
                }
            }).catch(err => {
                if (err) {
                    // Set forceLogout in localStor to force logout when navbar reloads
                    localStorage.setItem("forceLogout", "true");
                    // Direct user to log in
                    alert("Please log in to save a shred");
                    // Reload window to mount navbar
                    window.location.reload();
                    // Redirect to home
                    cc.setState({ redirectToHome: true });
                }
            });
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

    render() {
        return ( this.state.redirectToProfile?<Redirect to='/Profile'/> : this.state.redirectToHome?<Redirect to='/'/> : 
        <div>
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