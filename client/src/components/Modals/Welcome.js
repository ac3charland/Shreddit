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
                <h6 className="center-align">*Note: due to <a target="_blank" href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio">recent changes to autoplay in Chrome</a>, Shreddit may not play for some users.
                If a shred plays the first step and then stops, you can work around this issue by clicking an upvote or downvote button.
                Thanks for your patience as we work to fix this bug!</h6>
            </div>
        </div>

    </Modal>
)

export default Welcome;