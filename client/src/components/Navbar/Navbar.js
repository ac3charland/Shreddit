import React from "react";
import "./Navbar.css";
import  Login  from "../Modals/Login";
import  Register  from "../Modals/Register";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


class Navbar extends React.Component {
    state = {
        loggedin: false,
        readyToRedirect: false
    }

    componentDidMount(){
        var elems = document.querySelectorAll('#logInModal');
        var instances = M.Modal.init(elems);
        var elems = document.querySelectorAll('#RegisterModal');
        var instances = M.Modal.init(elems);
        this.authenticate();
    }

    authenticate = () => {
        const authenticated = localStorage.getItem("token");
        if (authenticated) {
            this.setState({ loggedin: true });
        }
        else {
            this.setState({ loggedin: false });
        }
    }

    login = () => {
        console.log("login");
        var modal = window.$("#logInModal");
        modal.modal('open');
    }

    register = () => {
        console.log("Register");
        var modal = window.$("#RegisterModal");
        modal.modal('open');
    }

    logout = () => {
        console.log("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("password");
        this.setState({ loggedin: false });
        window.location.reload();
        return null;
    }

    render() {
        let navlinks;
        if (this.state.loggedin === true) {
            navlinks = <><li><a href="/Profile">Profile</a></li><li className="divider"></li><li><a href="/Studio">Studio</a></li><li className="divider"></li><li><a button="#" onClick={this.logout}>Log Out</a></li></>
        }
        else {
            navlinks = <><li><a button={Register} onClick={this.register}>Register</a></li><li className="divider"></li><li><a button={Login} onClick={this.login}>Log In</a></li></>
        }

        return(
            <div>
                <Login/>
                <Register/>
                <nav className="navbar-fixed">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo"><i className="fas fa-play"></i> Shreddit</a>
                        <ul className="links right">
                            {navlinks}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;