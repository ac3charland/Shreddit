import React, { Component } from "react";
import Banner from "../../components/Banner";
import Shred from "../../components/Shred";
import Welcome from "../../components/Modals/Welcome"
import API from "../../utils/API"
import "./Main.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


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
        this.welcome();
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

        let authenticated = localStorage.getItem("token");

        // Get current component to have 'this' in sticky scope area
        const cc = this;

        // Get token from localStorage
        let token = localStorage.getItem("token");

        // Check current route to authorize, cast vote or redirect to log in
        API.current(token)
        .then(function(res) {
            if (res.data.user.token) {
                API.vote(data, id)
                    .then(() => cc.getAllShreds())
                    .catch(err => console.log(err));
            }
        }).catch(err => {
            if (err) {
                // Set forceLogout in localStor to force logout when navbar reloads
                localStorage.setItem("forceLogout", "true");
                // Direct user to log in
                alert("Please log in to cast a vote");
                // Reload window to mount navbar
                window.location.reload();
                // Scroll up to top of page for log in
                window.scrollTo(0, 0);
            }
        });

        
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

   readCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}


    welcome = () => {
        console.log("Running this.welcome()")
        console.log(this.readCookie("visited"));
        // if (!this.readCookie("visited")) {
        //     console.log("Should be opening modal...")
        //     var modal = window.$("#welcomeModal");
        //     modal.modal("open");
        //     document.cookie = "visited=true";
        // }
        var modal = window.$("#welcomeModal");
        modal.modal("open");
    }

    render(){
        return (
            <div>
                <div>
                    <Banner/>
                </div>
                <Welcome/>
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
                                    title={shred.title}
                                    username={shred.username}
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