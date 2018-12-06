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
        
        event.preventDefault();

        const currentComp = this;

        let user = {
            username: this.state.username,
            password: this.state.password
        }

        // Encoding of password for localStorage
        let passwordLS = "ac" + user.password + "x0!"

        // Setting username and pw in localStorage
        localStorage.setItem("username", user.username);
        localStorage.setItem("password", passwordLS);

        // Calling loginUser function, invoking api/users/login 
        // Req includes user obj with un and pw
        // Res includes user obj with id, un and token
        API.loginUser({ user: user })
            .then(function(res){
                console.log("res from login: ", res.data.user);
                // Saving token in localStorage

                localStorage.setItem("token", res.data.user.token);
                currentComp.setState({readyToRedirect: true})
            })
    }

    componentWillUnmount() {
        
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
                            <button onClick={this.loginUser} className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button> 
                        </div>
                    </div>
                </form>
            </Modal>
        )
    }
}

export default Login;