import React from "react";
import "./ShredPlayer.css";
import Nexus from "nexusui";
import Tone from "tone";

class ShredPlayer extends React.Component {
    
    state = {
        isPlaying: false,
        matrix: []
    }

    hello() {
        console.log("Hello!")
    }
    
    componentDidMount() {
        var sequencer = new Nexus.Sequencer('#target', {
            'size': [400, 200],
            'mode': 'toggle',
            'rows': 6,
            'columns': 16
        });
        // This is how we'll load melodies from Mongo
        sequencer.matrix.set.all(this.state.matrix);

        var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

        synth.triggerAttackRelease("C4", '8n');
    }
    render() {
        return (
            <div className="player">
                <div id="target"></div>

                <div id="play" className="button btn-floating btn-large" onClick={this.hello}><i class="material-icons">play_arrow</i></div>
                <div id="pause" className="button btn-floating btn-large" onClick={this.hello}><i class="material-icons">pause</i></div>

            </div>
        )
    } 
}


export default ShredPlayer;