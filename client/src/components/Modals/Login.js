import React, { Component } from "react";
import { Modal } from 'react-materialize';
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import { PromiseProvider } from "mongoose";

class Login extends React.Component {
    //when saving password, add simple encoding

    state = {
        username: "",
        password: "",
        readyToRedirect: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // Function to login user using passport POST (api/users/login) function
    loginUser = (event) => {

        // Prevent default of submit button
        event.preventDefault();

        // Get current component to use in deeper scope area
        const currentComp = this;

        // Creating user object to send in login call
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        // Setting username in localStorage
        localStorage.setItem("username", user.username);

        // Calling loginUser function, invoking api/users/login 
        // Req includes user obj with un and pw
        // Res includes user obj with id, un and token
        API.loginUser({ user: user })
            .then(function(res){
                // Saving token in localStorage 
                localStorage.setItem("token", res.data.user.token);
                // Set forceLogout to false
                localStorage.setItem("forceLogout", "false");
                // Reload window to update navbar
                window.location.reload();
                // Set state to cause redirect
                currentComp.setState({readyToRedirect: true})
            }).catch(function(err) { 
                if (err) {
                    alert("Invalid combination. Please try again.");
                }
            });
    }

    render(){
        return(this.state.readyToRedirect? <Redirect to="/"/> :
            <Modal
                id="logInModal"
                header='Login'>
                <form>
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
                            <button onClick={this.loginUser} className="btn waves-effect waves-light" type="submit" name="action">
                            Submit  <i class="fas fa-chevron-circle-right"></i>
                            </button> 
                        </div>
                    </div>
                </form>
            </Modal>
        )
    }
}

export default Login;