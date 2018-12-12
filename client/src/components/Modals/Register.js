import React from "react";
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

        // Get current component to use in deeper scope area
        const currentComp = this;

        let user = {
            username: this.state.username,
            password: this.state.password
        }

        var joinDate = new Date().toLocaleDateString('en-GB', {  
            day : 'numeric',
            month : 'short',
            year : 'numeric'
        });

        // Saving un in localStorage
        localStorage.setItem("username", user.username);
        localStorage.setItem("join", joinDate);

        // Function to make api call to save new user
        // Req includes user obj with un and pw
        // Res includes user obj with id, un and token
        API.saveUser({ user: user })
        .then(function(res){
            if (res.data.user) {
                // Save token in localStorage
                localStorage.setItem("token", res.data.user.token);
                // Set forceLogout to false
                localStorage.setItem("forceLogout", "false");
                // Set state.registered to true
                currentComp.setState({registered: true})
                // Set state.readyToRedirect to true, to trigger redirect
                currentComp.setState({readyToRedirect: true})
                // Reload window to update navbar
                window.location.reload();
            }
        })
    }

    render(){
        return( this.state.readyToRedirect?<Redirect to='/'/> : <Modal
                id="RegisterModal"
                header='Register'>
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
                            <button onClick={this.saveUser} className="btn waves-effect waves-light" type="submit" name="action">
                            Submit  <i className="fas fa-chevron-circle-right"></i>
                            </button> 
                        </div>
                    </div>
                </form>
            </Modal> 
        )
    }
}

export default Register;