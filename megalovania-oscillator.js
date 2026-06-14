let osc; //setting up both oscillators
let osc2;
let frequency;
//i wrote this a while ago, and could not be bothered to change the variable names
//if you wish to understand this code, oct means octave up, doct, means octave down
//i would also like to note that i know how inefficient this is
let llbb = 116.54;
let llb = 123.47;
let lc = 130.81;
let ld = 146.83;
let lbb = 233.08;
let lb = 246.94;
let c = 261.63;
let db=277.18 ;
let d = 293.66;
let eb = 311.13;
let f = 349.23;
let g = 392;
let ab = 415.3;
let a = 440;
let bb = 466.16;
let b=493.88 
let coct = 523.25;
let doct = 587.33;
let foct=698.46;
let goct=783.99 ;
let aboct=830.61;
let aoct= 880;
let doctoct=1174.66 ;


let notes = []; //for first oscillator
let mills;
let startTime = 0;
let noteStartTime = 0;
let noteStartTime2 = 0;

let currentNote = 0; 
let currentNote2 = 0;

let bassNotes1 = []; //for the second
function setup() {
  osc = new p5.Oscillator();
  userStartAudio();

  osc.setType("square"); //changing the oscillator i think makes it sound better
  osc.amp(0.3);
  osc.start();

  osc2 = new p5.Oscillator("sawtooth"); 
  osc2.amp(0.3);
  osc2.start();

  notes.push({ f: 0, s: 1 });

  //first one
  notes.push({ f: d, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: d, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.24 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: c, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: c, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: lb, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: lb, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: lbb, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: lbb, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.25 });

  //first one
  notes.push({ f: d, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: d, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.24 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: c, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: c, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: lb, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: lb, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: lbb, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: lbb, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: a, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: ab, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: f, s: 0.5 });
  notes.push({ f: d, s: 0.25 });
  notes.push({ f: f, s: 0.25 });
  notes.push({ f: g, s: 0.25 });
  
  //high one
    notes.push({ f: doct, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: doct, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doctoct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: aoct, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: aboct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: goct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: foct, s: 0.5 });
  notes.push({ f: doct, s: 0.25 });
  notes.push({ f: foct, s: 0.25 });
  notes.push({ f: goct, s: 0.24 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: coct, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: coct, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doctoct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: aoct, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: aboct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: goct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: foct, s: 0.5 });
  notes.push({ f: doct, s: 0.25 });
  notes.push({ f: foct, s: 0.25 });
  notes.push({ f: goct, s: 0.25 });
  notes.push({ f: b, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: b, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doctoct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: aoct, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: aboct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: goct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: foct, s: 0.5 });
  notes.push({ f: doct, s: 0.25 });
  notes.push({ f: foct, s: 0.25 });
  notes.push({ f: goct, s: 0.25 });
  notes.push({ f: bb, s: 0.23 });
  notes.push({ f: 0, s: 0.05 });
  notes.push({ f: bb, s: 0.2 });
  notes.push({ f: 0, s: 0.02 });
  notes.push({ f: doctoct, s: 0.49 });
  notes.push({ f: 0, s: 0.01 });
  notes.push({ f: aoct, s: 0.5 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: aboct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: goct, s: 0.25 });
  notes.push({ f: 0, s: 0.25 });
  notes.push({ f: foct, s: 0.5 });
  notes.push({ f: doct, s: 0.25 });
  notes.push({ f: foct, s: 0.25 });
  notes.push({ f: goct, s: 0.25 });


  //waiting by playing a sound that the human ear cannot hear
  bassNotes1.push({ f: 0, s: 17 });
//bass notes
  bassNotes1.push({ f: ld, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: ld, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: ld, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.5 });
  bassNotes1.push({ f: lc, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: lc, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: lc, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.5 });
  bassNotes1.push({ f: llb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: llb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.5 });
  bassNotes1.push({ f: llbb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: llbb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llbb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.5 });
  
  //second
  
  bassNotes1.push({ f: ld, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: ld, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: ld, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: ld, s: 0.5 });
  bassNotes1.push({ f: lc, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: lc, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: lc, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: lc, s: 0.5 });
  bassNotes1.push({ f: llb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: llb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llb, s: 0.5 });
  bassNotes1.push({ f: llbb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.45 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.3 });
  bassNotes1.push({ f: llbb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llbb, s: 0.25 });
  bassNotes1.push({ f: 0, s: 0.25 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.2 });
  bassNotes1.push({ f: 0, s: 0.05 });
  bassNotes1.push({ f: llbb, s: 0.5 });
  

  playNote();
  playNote2();
}

function draw() {
  startTime = millis();

  if (currentNote < notes.length) {
    if (startTime - noteStartTime > notes[currentNote].s * 500) {
      currentNote++;
      if (currentNote < notes.length) {
        playNote();
      } else {
        osc.amp(0);  //stops the oscillator
      }
    }
  }

  if (currentNote2 < bassNotes1.length) {
    if (startTime - noteStartTime2 > bassNotes1[currentNote2].s * 500) {
      currentNote2++;
      if (currentNote2 < bassNotes1.length) {
        playNote2();
      } else {
        osc2.amp(0); 
      }
    }
  }

  if (currentNote >= notes.length && currentNote2 >= bassNotes1.length) {
    osc.stop();
    osc2.stop();
    noLoop();
  }
}

function playNote() {
  let note = notes[currentNote];
  if (!note) return;
  if (note.f === 0) {
    osc.amp(0); 
  } else {
    osc.freq(note.f);
    osc.amp(0.3);
  }
  noteStartTime = millis();
}
function playNote2() {
  let note = bassNotes1[currentNote2];
  if (!note) return;
  if (note.f === 0) {
    osc2.amp(0); 
  } else {
    osc2.freq(note.f);
    osc2.amp(0.3);
  }
  noteStartTime2 = millis();
}
