import React from "react";
import "./Shred.css";

const Shred = props => (
    
        <div className="row z-depth-4 shred">
            <div className="col s12">
                {props.shred}
            </div>
        </div>

)

export default Shred;