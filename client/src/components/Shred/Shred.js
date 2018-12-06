import React from "react";
import "./Shred.css";
import ShredPlayer from "../ShredPlayer";

const Shred = props => (
    <div className="row z-depth-4 shred">
        <div className="col s12">
            <div className="row">
                <div className="col s2 votes">
                    <div classNmae="row">
                        <div className="col s12 username center-align">
                            <h6>By: <a href={"/profile/" + props.username}>{props.username}</a></h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <i className="material-icons arrow" onClick={() => props.vote(props.id, 1)}>arrow_upward</i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <h6 className="votesNumber">{props.votes}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <i className="material-icons arrow" onClick={() => props.vote(props.id, -1)}>arrow_downward</i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col links s12 center-align">
                            <h6><a href={"/posted/" + props.shred_id}>Comments</a></h6>
                            <h6><a href=""> Share</a></h6>
                        </div>
                    </div>
                </div>
                <div className="col m10">
                    <h5>{props.title}</h5> 
                    <hr></hr>
                </div>
                <div className="col s10">
                    <ShredPlayer
                        walkieTalkie={props.walkieTalkie}
                        matrix={props.matrix}
                        id={props.user_id}
                        title={props.title}
                    />
                </div>
            </div>
        </div>
    </div>

)

export default Shred;