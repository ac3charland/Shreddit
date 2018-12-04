import React from "react";
import "./Shred.css";
import ShredPlayer from "../ShredPlayer";

const Shred = props => (
    <div className="row z-depth-4 shred">
        <div className="col s12">
            <div className="row">

                <div className="col s2 votes">
                    <div className="row">
                        <div className="col s12 center-align">
                            <i className="material-icons arrow" onClick={() => props.upvote(props.id, props.votes)}>arrow_upward</i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <h6 className="votesNumber">{props.votes}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <i className="material-icons arrow" onClick={() => props.downvote(props.id, props.votes)}>arrow_downward</i>
                        </div>
                    </div>
                </div>
                <div className="col s10">
                    <ShredPlayer
                        id={props.id}/>
                </div>
                
            </div>
            <div className="row">
                <div className="col s2"></div>
                <div className="col s10 center-align">
                    <h6><a href="">Comments |</a><a href=""> Share</a></h6>
                </div>
            </div>
        </div>
    </div>

)

export default Shred;