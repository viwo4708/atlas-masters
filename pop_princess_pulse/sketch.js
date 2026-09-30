let poseImages = []; //array to hold the pose images for animation
let totalPoses = 11;


let notes = []; //stores the claps
let songAudio;
let songStartTime = 0;
let isPlaying = false;
const audioOffset = 1.45;

let isGameStarted = false;
let scrollSpeed = 325;
let hitWindow = .085;

let trackX;
let targetY;
let barWidth = 120;//determines size of falling "notes" and target
let barHeight = 24;

let redHeart;
let blackHeart;
let total_lives = 7;
let lives_left = 7;

let mic;
let amplitude;

let previousVolume = 0;
let spikeThreshold = 0.1;
let clapThreshold = .2;
let isClapping = false;

let dancerOpacity = 255;  // 255 is fully visible, 0 is fully invisible //also i don't think this actually works lol
let isGameOver = false;

function preload() {
    redHeart = loadImage("./image_assets/pixel_heart.png");
    blackHeart = loadImage("./image_assets/black_pixel_heart.png");

    for(let i = 1; i <= totalPoses; i++) {
        poseImages.push(loadImage(`./image_assets/poses/frame${i}.png`)); //load all image assets
    }

    song = loadSound("./audio_assets/stateside_zara_pink.mp3"); //load audio for song
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  trackX = windowWidth * .8;

  targetY = windowHeight * .85;

  buildLevel(); //see buildLevel function
}

function draw() {
    background("#ff95de");

    if (!isGameStarted) {
        drawStartScreen();
        return;
    }

    if (isGameOver) {
        drawEndScreen();
        return;
    }

    checkMicClap();

    drawDancer();

    drawHearts();

    let currentTime = song.currentTime(); //i think all of this code would be better wrapped in a function but oh well

    //targetbar
    fill(255, 255, 255, 80);
    stroke(255);
    strokeWeight(3);
    rect(trackX, targetY, barWidth, barHeight);

    //draw incoming notes!!
    //for EVERY DRAW LOOP, it checks every note in the array and draws the ones that need to be on screen!
    for(let i = notes.length - 1; i>=0; i--) { //loops backwards to prevent errors from index shifting when removing elements
        let note = notes[i];
        let timeDiff = note.targetTime - currentTime;

        let noteY = targetY - (timeDiff*scrollSpeed); //calculate y coord of note based on how long until it is time to hit it
       
        if(!note.hit && noteY > -50 && noteY < windowHeight + 50) { //if note is not hit and it's 50 above or 50 below the window edge
            noStroke();
            fill("#18fffb");
            rect(trackX, noteY, barWidth, barHeight);
        }

            //check for missed notes!
        if(!note.hit && !note.missed && timeDiff < -hitWindow) {//if the hitwindow has passed and the note is not hit
            note.missed = true;
            console.log("MISSED NOTE");
            loseLife();
        }

        if (noteY > windowHeight + 100) {
            notes.splice(i, 1);
        }
    }


    // // Add this temporarily at the bottom of draw()
    // if (mic && amplitude) {
    //     let currentVol = amplitude.getLevel();
    //     fill(255);
    //     noStroke();
    //     textSize(16);
    //     textAlign(LEFT, TOP);
    //     text("Mic Level: " + currentVol.toFixed(3), 20, 100);
        
    //     // Green bar showing current volume level
    //     fill(0, 255, 0);
    //     rect(20, 130, currentVol * 400, 20);
    // }
}

function triggerClap() {
    let currentTime = song.currentTime();
    let closestNote = null;
    let smallestDiff = Infinity;

    //find closest unhit hote
    for (let note of notes) {
        if(!note.hit && !note.missed) {//for all existing notes, figure out which one's hit time is closest to the TIME THE CLAP OCCURS
            let diff = Math.abs(currentTime - note.targetTime);
            if(diff < smallestDiff) {
                smallestDiff = diff;
                closestNote = note;
            }
        }
    }

    if (closestNote && smallestDiff <= hitWindow) {//if the clap occurs within the hit window of the closest note
        closestNote.hit = true;
        console.log("HIT!")
        gainLife();
        //TODO: have some indicator of success
    } else {
        console.log("MISS!"); //catches claps that don't line up with a note
        loseLife();
    }
}

function keyPressed() {
  if (keyCode === 32) { // SPACEBAR
    triggerClap();
  }
  
//   if (key === 'a' || key === 'A') { // 'A' Key //code to spawn notes for testing
//     let futureTime = (millis() / 1000.0) + 2.0;
//     notes.push({ targetTime: futureTime, hit: false, missed: false });
//     console.log("Spawned note for t = " + futureTime.toFixed(2) + "s");
//   }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  trackX = windowWidth * 0.875;
  targetY = windowHeight * 0.85; //handles dyamic resizing
}

function drawHearts() {
    let heartX = windowWidth * .2; //horizontal position of hearts
    let heartSize = 70;
    let blackheartSize = 55;
    let spacing = 80;

    let totalHeight = total_lives * spacing;
    let startY = windowHeight/2 - totalHeight / 2 + spacing / 2;
    imageMode(CENTER);

    for (let i = 0; i < total_lives; i++) {
        let currentY = startY + i * spacing;

        if (i < (total_lives - lives_left)) {
            image(blackHeart, heartX, currentY, blackheartSize, blackheartSize);
        } else {
            image(redHeart, heartX, currentY, heartSize, heartSize);
        }
    }
}

function loseLife(){
    if (lives_left > 0) {
        lives_left --;
        console.log("lost a life!");
    }

    if (lives_left === 0 && !isGameOver) {

        isGameOver = true;
        console.log("game over!");
        // Stop the music when lives reach 0
        if (song.isPlaying()) {
            song.stop();
        }
    }
}

function gainLife() {
    if(lives_left < total_lives) {
        lives_left++;
    }
}

function buildLevel() {
    notes = [];

    let tickduration = (60.0/SONG_BPM) / SUBDIVISION;

    for (let i = 0; i < rhythmGrid.length; i++) {
        if(rhythmGrid[i] === 1) {
            let targetTime = audioOffset + (i * tickduration);//each element of hte grid is an 8th note

            notes.push({
                targetTime: targetTime,
                hit: false,
                missed: false,
            })
        }
    }
}

function drawStartScreen() {
    textAlign(CENTER, CENTER);
    fill(255);

    textSize(100);
    textFont("Bitcount Prop Double Ink")
    text("POP PRINCESS PULSE", windowWidth / 2, windowHeight * 0.40);

    textSize(50);

    text("CLICK ANYWHERE TO START", windowWidth / 2, windowHeight * 0.5);
    
    textSize(45);
    text("clap on beat to not lose!", windowWidth / 2, windowHeight * .60)
}

function drawEndScreen() {
    textAlign(CENTER, CENTER);
    fill(255);

    textSize(100);
    text("GAME OVER", windowWidth / 2, windowHeight * 0.5);
}

function mousePressed() {
  // Only trigger start logic on the very first click
  if (!isGameStarted) {
    // 1. Enable browser Web Audio engine
    userStartAudio(); 

    // 2. Play the loaded song
    song.play(); 

    mic = new p5.AudioIn();
    mic.start(() => {
        console.log("mic connected!");
        amplitude = new p5.Amplitude();
        amplitude.setInput(mic);
        amplitude.smooth(0);
    });

    // 3. Start the game engine
    isGameStarted = true;
    
    console.log("Audio unlocked & song started!");
  }
}

function drawDancer() {
    // 1. Return early if images aren't loaded or if dancer has fully faded out
    if (poseImages.length === 0 || dancerOpacity <= 0) return;

    // 2. Handle fading out on Game Over
    if (isGameOver) {
        dancerOpacity = max(0, dancerOpacity - 5);
    }

    // 3. Calculate timing and beat index
    let secondsPerBeat = 60 / SONG_BPM;
    let currentTime = song.currentTime();
    let currentBeat = Math.floor((currentTime - audioOffset) / secondsPerBeat);

    // Pick pose based on beat (defaults to pose 0 before track starts or after song stops)
    let currentPoseIndex = currentBeat >= 0 ? Math.abs(currentBeat) % poseImages.length : 0;
    let currentImg = poseImages[currentPoseIndex];

    // 4. Render dancer
    if (currentImg) {
        imageMode(CENTER);
        let dancerHeight = windowHeight * 0.85;
        let aspect = currentImg.width / currentImg.height;
        let dancerWidth = dancerHeight * aspect;

        tint(255, dancerOpacity);
        image(currentImg, windowWidth / 2.1, windowHeight / 2, dancerWidth, dancerHeight);
        noTint(); // Reset tint so rest of game UI isn't affected
    }
}

function checkMicClap() {
    if (!isGameStarted || isGameOver || !mic || !amplitude) return;

    let currentVolume = amplitude.getLevel();
    let volumeJump = currentVolume - previousVolume;

    if (volumeJump > spikeThreshold && !isClapping) {
        isClapping = true;
        console.log("clap detected, jump", volumeJump.toFixed(2));
        triggerClap();
    } else if (currentVolume < clapThreshold * .6) {
        isClapping = false;
    }

    previousVolume = currentVolume; //detects claps by detecting spikes in mic volume
}