import React, { Component } from "react";
import "./Login.css"
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Modal } from 'react-materialize';

  
    send = (id) => {
        this.setState({
            messageId: id
        }, () => {
        var modal = window.$("RegisterModal");
        modal.modal('open')
        })
    }

class Login extends Component {
    render(){
        return(
            <Modal
                id="RegisterModal"
                header='Sent!'>
                <div class="row">
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
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="username" type="text" class="validate"/>
                        <label for="username">Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate"/>
                        <label for="password">Password</label>
                    </div>
                </div>
            </Modal>
        )
    }
}