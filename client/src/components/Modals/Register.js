import React, { Component } from "react";
import { Modal } from 'react-materialize';

class Register extends React.Component {

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

    saveUser = () => {
        alert("Username: " + this.state.username + "\nPassword: " + this.state.password)
    }

    render(){
        return(
            <Modal
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
                    <div class="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" name="username" onChange={this.handleInputChange} value={this.state.username}/>
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div class="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" onChange={this.handleInputChange} value={this.state.password}/>
                            <label for="password">Password</label>
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