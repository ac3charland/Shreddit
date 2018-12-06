import React, { Component } from "react";
import { Modal } from 'react-materialize';
import API from "../../utils/API";
import  { Redirect } from 'react-router-dom';

class Register extends React.Component {

    state = {
        username: "",
        password: "",
        registered: false,
        readyToRedirect: false,
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // Function to save new user in db
    saveUser = (event) => {
        event.preventDefault();

        // Get current component here to access in tricky scope area
        let currentComp = this;

        let user = {
            username: this.state.username,
            password: this.state.password
        }

        // Encoding password for saving in localStorage
        let passwordLS = "ac" + user.password + "x0!"

        // Saving un and pw in localStorage
        localStorage.setItem("username", user.username);
        localStorage.setItem("password", passwordLS);


        // Function to make api call to save new user
        // Req includes user obj with un and pw
        // Res includes user obj with id, un and token
        API.saveUser({ user: user })
        .then(function(res){
            if (res.data.user) {

                // Save token in localStorage
                localStorage.setItem("token", res.data.user.token);

                currentComp.setState({registered: true})

                // Setting state to trigger redirect

                currentComp.setState({readyToRedirect: true})

                window.location.reload();
            }
        })

       

    }

    render(){
        return( this.state.readyToRedirect?<Redirect to='/'/> : <Modal
                id="RegisterModal"
                header='Register'>
                <form>
                    {/* <div class="row">
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="first_name" type="text" class="validate"/>
                                    <label for="first_name">First Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate"/>
                                    <label for="last_name">Last Name</label>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" name="username" onChange={this.handleInputChange} value={this.state.username}/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" onChange={this.handleInputChange} value={this.state.password}/>
                            <label htmlFor="password">Password</label>
                            <button onClick={this.saveUser} className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button> 
                        </div>
                    </div>
                </form>
            </Modal> 
        )
    }
}

export default Register;