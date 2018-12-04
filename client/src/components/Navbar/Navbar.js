import React from "react";
import "./Navbar.css";


class Navbar extends React.Component {
    state = {
        loggedin: false,
        username: "",
        password: ""
    }

    authenticate = () => {
        const authenticated = localStorage.getItem("token");
        if (authenticated !== "undefined" || authenticated !== "null") {
            this.setState({ loggedin: true });
        }
        else {
            this.setState({ loggedin: false })
        }
    }


   
    render() {

        let navlinks;

        if (this.state.loggedin === true) {
            navlinks = <><li><a href="/Profile">Profile</a></li><li className="divider"></li><li><a href="/Studio">Studio</a></li><li className="divider"></li><li><a href="#">Log Out</a></li></>
        }
        else {
            navlinks = <><li><a href="#">Register</a></li><li className="divider"></li><li><a href="#">Log In</a></li></>
        }

        return(
            <nav className="navbar-fixed">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><i className="fas fa-play"></i> Shreddit</a>
                    <ul className="right">
                        {navlinks}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

