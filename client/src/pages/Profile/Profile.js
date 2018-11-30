import React, { Component } from "react";
import "./Profile.css"
import UserBio from "../../components/UserBio";

class Profile extends Component {

    state = {
        name: "Melissa",
        joinDate: "11/30/18",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum sed nulla et rutrum. Phasellus interdum ex et lacus pellentesque sodales. Fusce sollicitudin suscipit ligula sit amet dictum. Donec sagittis ligula ut sapien rhoncus interdum. In id purus vel tellus molestie consequat. Aenean commodo ante ac tincidunt tincidunt. Quisque diam odio, elementum sed placerat in, rhoncus sit amet odio. Sed et turpis vel augue fermentum bibendum. Nam congue tortor vel enim molestie vestibulum."

    }

    render(){
        return (
            
            <div>
                <div>
                    <img className="banner" src="https://i.pinimg.com/originals/1e/c5/ed/1ec5ed2549a696b5cb23dd273ce18e18.jpg"></img>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col s8">
                        
                        </div>

                        <UserBio
                        name={this.state.name}
                        joinDate={this.state.joinDate}
                        bio={this.state.bio}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;

