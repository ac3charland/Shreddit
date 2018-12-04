import React, { Component } from "react";
import { Modal } from 'react-materialize';

class Login extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
    }

    //sets the messageId as the id of the message selected, then displays the modal
    send = (id) => {
        this.setState({
            messageId: id
        }, () => {
        var modal = window.$("#logInModal");
        modal.modal('open')
        })
    }

    render(){
        return(
            <Modal
                id="logInModal"
                header='Sent!'>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="username" class="validate"/>
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

export default Login;