import React, { Component } from "react";
import Banner from "../../components/Banner";
import ShredPlayer from "../../components/ShredPlayer";
import "./Studio.css";
import API from "../../utils/API";

class Studio extends Component {


    // TODO: Update this.state.matrix when user changes shredplayer component

    state = {
        userId: "",
        matrix: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

    }

    save = () => {
        // before saving to db, make sure saving current matrix

        API.saveShred({
            userId: this.state.userId,
            matrix: this.state.matrix
        })
    }

    clear = () => {
        // Set state matrix to 0 matrix
    }

    render(){
        return (
            <div>
                <div>
                    <Banner />
                </div>

                <div className="row container">
                    <div className="col s12">
                        <div className="row">
                            <h2 className="col s12">Your Studio</h2>
                        </div>

                        <div className="z-depth-4">
                            <div className="row">
                                <div className="col s1"></div>
                                <div className="col s10 shred">
                                    <ShredPlayer
                                        id= "studio" 
                                    />
                                </div>
                                <div className="col s1"></div>
                            </div>

                            <div className="row">
                                <div className="col s12 center-align">
                                    <button class="btn waves-effect waves-light" onClick={this.save}>Save
                                        <i class="material-icons right">save</i>
                                    </button>
                                    <button class="btn waves-effect waves-light" onClick={this.clear}>Clear
                                        <i class="material-icons right">delete</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Studio;