import React from "react";
import { Modal } from 'react-materialize';

const Welcome = () => (
    <Modal
        id="welcomeModal"
        header='Welcome!'>

        <div className="row">
            <div className="col s4"></div>
            <div className="col s4 center-align">
                <img alt="volumeOn.gif" className="responsive-img circle" src={window.location.origin + "/images/volumeOn.gif"}></img>
            </div>
            <div className="col s4"></div>
        </div>
        <div className="row">
            <div className="col s12">
                <h4 className="center-align">Shreddit is best experienced with sound.</h4>
            </div>
        </div>

    </Modal>
)

export default Welcome;