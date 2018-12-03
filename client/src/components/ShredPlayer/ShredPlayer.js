import React from "react";
import "./ShredPlayer.css"

const ShredPlayer = props => (
    <div className="player">
        <div id="target"></div>

        <div id="play" className="button btn"></div>
        <div id="pause" className="button btn"></div>

    </div> 
)

export default ShredPlayer;