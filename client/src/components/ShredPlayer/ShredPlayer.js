import React from "react";
import "./ShredPlayer.css";
import Nexus from "nexusui";
import Tone from "tone";

class ShredPlayer extends React.Component {
    
    state = {
        isPlaying: false,
        icon: "fa-play",
        playerWidth: 600,
        matrix: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    // The notes of our sequencer, from lowest to highest
    notes = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'];

    sequencer; 

    synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

    resizePlayer = () => {
        const playerWidth = document.getElementsByClassName("player")[0].parentElement.clientWidth - 16;

        this.sequencer = new Nexus.Sequencer('#' + this.props.id, {
            'size': [playerWidth, 200],
            'mode': 'toggle',
            'rows': 6,
            'columns': 16
        });
    }

    componentDidMount() {

        this.resizePlayer()

        window.addEventListener("resize", console.log("Resizing"));
        
        
        // This is how we'll load melodies from Mongo
        this.sequencer.matrix.set.all(this.props.matrix);

        this.sequencer.colorize("accent", "#4dd0e1");

        const sendMatrix = matrix => {
            console.log("matrix inside sendMatrix(): ");
            console.log(matrix);
            this.props.walkieTalkie(matrix)
        }

        // Plays all the notes at a step in the sequencer
        const stepToSound = (stepArray) => {
            const currentComponent = this;
            
            let notesToPlay = [];
            
            stepArray.map((square, index) => {
                if (square === 1) {
                    const note = currentComponent.notes[index];
                    notesToPlay.push(note);
                }
            });

            this.synth.triggerAttackRelease(notesToPlay, '8n')
        }

        // Triggers a note when a user activates a cell
        const changeToSound = (cell) => {
            // If the cell has been turned on:
            if (cell.state && !this.state.isPlaying) {
                var row = cell.row;
                var notesIndex = this.notes.length - row - 1
                var note = this.notes[notesIndex];
                this.synth.triggerAttackRelease([note], '8n');
            }
        }

        const exportMatrix = (matrix) => {
            
            let exportArray = [];

            matrix.map((row) => {
                let exportRow = [];
                row.map((cell) => {
                    if (cell) {
                        exportRow.push(1);
                    } else {
                        exportRow.push(0);
                    }
                });
                exportArray.push(exportRow);
            })

            return exportArray;
        }


        this.sequencer.on('change', function (cell) {
            changeToSound(cell);
            sendMatrix(exportMatrix(this.matrix.pattern))
        });

        this.sequencer.on('step', function (stepArray) {
            stepToSound(stepArray);
        });
    }

    

    playButtonClicked = () => {
        if (this.state.isPlaying === false) {
            this.sequencer.start();
            this.setState({
                'isPlaying': true,
                'icon': 'fa-pause'
            })
        } else {
            this.sequencer.stop();
            this.setState({
                'isPlaying': false,
                'icon': 'fa-play'
            })
        }
    }

    render() {
        return (
            <div className="player">
                <div id={this.props.id}></div>

                <div className="play button btn-floating btn-large cyan lighten-2" onClick={this.playButtonClicked}><i className={"fas " + this.state.icon}></i></div>

            </div>
        )
    } 
}


export default ShredPlayer;