import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    state = {
        // loggedin
    }

    // authenticate = () => {
    //     const authenticated = localStorage.getItem("token");
    //     if (authenticated !== "undefined" || authenticated !== "null") {
    //         this.setState({ loggedin: true });
    //     }
    //     else {
    //         this.setState({ loggedin: false })
    //     }
    // }

    render() {

        let navlinks;

        if (this.state.loggedin == true) {
            navlinks = <><li><a href="/profile">Profile</a></li><li className="divider"></li><li><a href="/studio">Studio</a></li><li className="divider"></li><li><a href="#">Log Out</a></li></>
        }
        else {
            navlinks = <><li><a href="#">Register</a></li><li className="divider"></li><li><a href="#">Log In</a></li></>
        }

        // const logger = this.state.loggedin;
        // let navlinks;

        // if (logger == true) {
        //     navlinks = <li><a href="#">Profile</a></li><li className="divider"></li><li><a href="#">Studio</a></li><li className="divider"></li><li><a href="#">Log Out</a></li>
        // }
        // else {
        //     navlinks = <li><a href="#">Register</a></li><li className="divider"></li><li><a href="#">Log In</a></li>
        // }


        return(
            <nav className="navbar-fixed">
                <div className="nav-wrapper">
                    {/* <a href="#" className="brand-logo"><i className="fas fa-play"></i> Shreddit</a> */}
                    <ul className="right">
                        <li>
                            <form>
                                <div className="input-field">
                                    <input id="search" type="search" required>
                                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                        <i className="material-icons">close</i>
                                    </input>
                                </div>
                            </form>
                        </li>
                        <Dropdown trigger={<li><a className="dropdown-trigger" href="#!">Navigation<i className="material-icons right">arrow_drop_down</i></a></li>}>
                            {navlinks}
                        </Dropdown>
                    </ul>
                </div>
                <Modal
                id="RegisterModal"
                header='Sent!'>
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
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
                </Modal>
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
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
                </Modal>
            </nav>
        );
    }
}

export default Navbar;

