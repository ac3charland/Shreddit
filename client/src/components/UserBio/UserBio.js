import React from "react";
import "./UserBio.css";

const UserBio = props => (
    <div className="container bioCard">
        <div className="row">
            <div className="col s2">
                <img className="profileImg responsive-img" alt={props.name} src={window.location.origin + '/images/user-icon.jpg'}></img>
            </div>
            <div className="col s10 info">
                <h3>{props.username}'s Shreds</h3>
                <p>Joined: {props.joinDate}</p>
            </div>
        </div>
    </div>
)

export default UserBio;