import React, { Component } from "react";
import { Modal } from 'react-materialize';
import API from "../../utils/API"

class Register extends React.Component {
    //when saving password, add simple encoding

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

    saveUser = (event) => {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        }

        localStorage.setItem("username", user.username);
        localStorage.setItem("password", user.password);

        API.saveUser({ user: user })
            .then(function(res){
                console.log(res)
                localStorage.setItem("token", res.data.user.token);
            })
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