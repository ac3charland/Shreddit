// The notes of our sequencer, from lowest to highest
var notes = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'];

// An initial set of values for the sequencer. We'll use an analagous process to load users' melodies from the DB
var startingMatrix = [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0]
];

// Plays all the notes at a step in the sequencer
function stepToSound(stepArray) {
    var notesToPlay = [];
    for (var i=0; i<stepArray.length; i++) {
        var note = notes[i];
        if (stepArray[i] === 1) {
            notesToPlay.push(note);
        }
    }
    synth.triggerAttackRelease(notesToPlay, '8n')
}

// Triggers a note when a user activates a cell
function changeToSound(cell) {
    // If the cell has been turned on:
    if (cell.state && !playing) {
        var row = cell.row;
        var notesIndex = notes.length - row - 1
        var note = notes[notesIndex];
        synth.triggerAttackRelease([note], '8n');
    }
}

// Stores the state of the sequencer to avoid bugs with the play/pause buttons
var playing = false;


// Synth object which will play the notes of the sequencer
var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();


$(document).ready(function() {

    var sequencer = new Nexus.Sequencer('#target', {
        'size': [00, 200],
        'mode': 'toggle',
        'rows': 6,
        'columns': 8
    });
    // This is how we'll load melodies from Mongo
    sequencer.matrix.set.all(startingMatrix);

    var playButton = new Nexus.TextButton('#play', {
        'size': [150, 50],
        'state': false,
        'text': 'Play',
        'alternate': false
    });

    var pauseButton = new Nexus.TextButton('#pause', {
        'size': [150, 50],
        'state': false,
        'text': 'Pause',
        'alternate': false
    });


    sequencer.on('change', function (cell) {
        changeToSound(cell);
    });

    sequencer.on('step', function(stepArray) {
        stepToSound(stepArray);
    });
 
    playButton.on('change', function (v) {
        console.log(v);
        
    })

    pauseButton.on('change', function (v) {
        console.log(v);
        if (this.state === true && playing === true) {
            console.log("Gonna stop sequencer!")
            sequencer.stop();
            playing = false;
        }
    });
});
