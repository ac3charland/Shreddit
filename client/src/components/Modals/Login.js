import React, { Component } from "react";
import { Modal } from 'react-materialize';

class Login extends React.Component {

    state = {
        username: "",
        password: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    login = () => {
        alert("Username: " + this.state.username + "\nPassword: " + this.state.password)
    }

    render(){
        return(
            <Modal
                id="logInModal"
                header='Login'>
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" name="username" onChange={this.handleInputChange} value={this.state.username}/>
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" onChange={this.handleInputChange} value={this.state.password}/>
                            <label for="password">Password</label>
                            <button onClick={this.login} className="btn waves-effect waves-light" type="submit" name="action">Submit
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