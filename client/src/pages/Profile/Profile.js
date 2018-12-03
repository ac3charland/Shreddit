import React, { Component } from "react";
import "./Profile.css"
import UserBio from "../../components/UserBio";
import Shred from "../../components/Shred";
import Banner from "../../components/Banner";

class Profile extends Component {

    state = {
        name: "Melissa",
        joinDate: "11/30/18",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum sed nulla et rutrum. Phasellus interdum ex et lacus pellentesque sodales. Fusce sollicitudin suscipit ligula sit amet dictum. Donec sagittis ligula ut sapien rhoncus interdum. In id purus vel tellus molestie consequat. Aenean commodo ante ac tincidunt tincidunt. Quisque diam odio, elementum sed placerat in, rhoncus sit amet odio. Sed et turpis vel augue fermentum bibendum. Nam congue tortor vel enim molestie vestibulum.",
        shreds: [{shred: "Shred1", votes: 120}, {shred: "Shred2", votes: 30}, {shred:"Shred3", votes: 80}],

    }

    render(){
        return (
            
            <div>
                <div>
                    <Banner/>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col s8">
                        {this.state.shreds.length ? (
                            this.state.shreds.map(shred => (
                                <Shred
                                    shred={shred.shred}
                                    votes={shred.votes}
                                />
                            ))
                        ) : (
                            <h3>You do not have any Shreds yet!</h3>
                        )}
                        
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

