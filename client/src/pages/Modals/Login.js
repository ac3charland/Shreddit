import React, { Component } from "react";
import "./Login.css"
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Modal } from 'react-materialize';

    //sets the messageId as the id of the message selected, then displays the modal
    send = (id) => {
        this.setState({
            messageId: id
        }, () => {
        var modal = window.$("logInModal");
        modal.modal('open')
        })
    }

class Login extends Component {
    render(){
        return(
            <Modal
                id="logInModal"
                header='Sent!'>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate"/>
                        <label for="email">Email</label>
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
