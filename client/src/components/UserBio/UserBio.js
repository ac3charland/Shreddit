import React from "react";
import "./UserBio.css";

const UserBio = props => (
    <div className="col s4 bioCard z-depth-4">
        <div className="row">
            <div className="col s6">
                <img className="profileImg responsive-img" src="http://www.thatentertains.com/wp-content/uploads/2018/01/female-place-holder-profile-image.jpg" alt={props.name}></img>
            </div>
            <div className="col s6 info">
                <h5>{props.name}</h5>
                <p>Joined: {props.joinDate}</p>
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <div>
                    <p>{props.bio}</p>
                </div>
            </div>
        </div>
        
    </div>
)

export default UserBio;