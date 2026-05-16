function drawTargets(notes) {
  push();
  let playhead = currentsong.audioFile.currentTime();
  let flashWindow = 0.19; // How long the flash stays

  for(let i = 0; i < 5; i++) {
    let buttonNum = i + 1;
    let angle = i*72-90; //draws five targets around a circle at equally divided angles
    let x = width/2 + cos(radians(angle)) * targetDistance;
    let y = height/2 + sin(radians(angle)) * targetDistance;
    // If no note is coming, it stays green.
    let ringColor = color("#212121");

    for (let note of notes) {
      if (note.buttonIndex === buttonNum && !note.isDead) {
        // Change the ring color to the player's color
        if (note.player === 1) {
          ringColor = color(p1Color); // Pink for P1
        } else if (note.player === 2) {
          ringColor = color(p2Color); // Blue for P2
        }
        // Since players never hit the same button simultaneously, 
        // we can stop looking once we find the note for this target.
        break; 
      }
    }
    
    stroke(ringColor); //light green
    strokeWeight(7)
    noFill();
    
    circle(x, y, 70);
  }
  pop();
}

function spawnNotes(step, targetTime) {
  if(step[0] > 0) {
    let p1Note = new Note(step[0], 1, targetTime, travelTime);
    activeNotes.push(p1Note);
  } 
  if(step[1] > 0) {
    let p2Note = new Note(step[1], 2, targetTime, travelTime);
    activeNotes.push(p2Note);
  }
}

function resetGameVariables() {
  score = 0;
  streak = 0;
  multiplier = 1;
  p1Hits = 0;
  p2Hits = 0;
  currentStep = 0;
  activeNotes = [];
  gameCompleted = false;
  accuracybonus = false;
}

function CreateButtons() {
    // Define Song Buttons (Right Side)
    songButtons.push(new Button(width * 0.75, height * 0.2, 300, 50, "Pokerface - Lady Gaga", gamepink, "SELECT_POKERFACE"));
    songButtons.push(new Button(width * 0.75, height * 0.3, 300, 50, "Replay - Iyaz", gamepink, "SELECT_REPLAY"));
    songButtons.push(new Button(width * 0.75, height * 0.4, 300, 50, "E.T. - Katy Perry", gamepink, "SELECT_ET"));
    songButtons.push(new Button(width * 0.75, height * 0.5, 300, 50, "OMG - Usher", gamepink, "SELECT_OMG"));
    songButtons.push(new Button(width * 0.75, height * 0.6, 300, 50, "BedRock - Young Money", gamepink, "SELECT_BEDROCK"));

    // Navigation Buttons
    navButtons.push(new Button(width * 0.75, height * 0.8, 300, 60, "LEADERBOARD", gameblue, "GO_LEADERBOARD"));
}

function beginGame() {
  themeMusic.stop();      // Kill the menu music
  resetGameVariables();   // Clear score, hits, and notes
  currentsong.audioFile.play();
  gameState = "PLAYING";
}

function mousePressed() {
    if (gameState === "START") {
        // Check Song Buttons
        if (songButtons[0].isMouseOver()) {
            handleSongSelection(pokerface_ladygaga);
            stepInterval = 60000 / currentsong.bpm;// 60,000 milliseconds in a minute. so each step is the number of milliseconds in one beat
            noteSpeed = 340;  
            travelTime = targetDistance / noteSpeed; //time it takes for note to travel from center to target

        }
        if (songButtons[1].isMouseOver()) {
            handleSongSelection(replay_iyaz);
            stepInterval = 60000 / currentsong.bpm;// 60,000 milliseconds in a minute. so each step is the number of milliseconds in one beat
            noteSpeed = 300;  
            travelTime = targetDistance / noteSpeed; //time it takes for note to travel from center to target

        }

        if (songButtons[2].isMouseOver()) {
            handleSongSelection(et_katyperry);
            stepInterval = 60000 / currentsong.bpm;// 60,000 milliseconds in a minute. so each step is the number of milliseconds in one beat
            noteSpeed = 280;  
            travelTime = targetDistance / noteSpeed; //time it takes for note to travel from center to target

        }

        if (songButtons[3].isMouseOver()) {
            handleSongSelection(omg_usher);
            stepInterval = 60000 / currentsong.bpm;// 60,000 milliseconds in a minute. so each step is the number of milliseconds in one beat
            noteSpeed = 370;  
            travelTime = targetDistance / noteSpeed; //time it takes for note to travel from center to target

        }

        if (songButtons[4].isMouseOver()) {
            handleSongSelection(bedrock_youngmoney);
            stepInterval = 60000 / currentsong.bpm;// 60,000 milliseconds in a minute. so each step is the number of milliseconds in one beat
            noteSpeed = 370;  
            travelTime = targetDistance / noteSpeed; //time it takes for note to travel from center to target

        }


        // Check Nav
        if (navButtons[0].isMouseOver()) {
            gameState = "LEADERBOARD";
        }
    } else if (gameState === "END") {
      if (teamQualifies) {
        gameState = "TEAM_NAME"
      } else {
        gameState = "START";  
      }
    } else if (gameState === "LEADERBOARD") {
      gameState = "START";
    } else if (gameState === "PLAYING") {
      if (currentsong && currentsong.audioFile && currentsong.audioFile.isPlaying()) {
        currentsong.audioFile.stop();
      }
      gameState = "START";
    }
  } 

function handleSongSelection(songObj) {
    //If something else is playing, stop it
    if (currentsong && currentsong.audioFile && currentsong.audioFile.isPlaying()) {
    currentsong.audioFile.stop();
    }

    currentsong = songObj;

    // 2. If already loaded, jump straight to the start function
  if (currentsong.audioFile) {
    beginGame();
  } else {
    // 3. Otherwise, load and then start
    isLoading = true;
    currentsong.audioFile = loadSound(currentsong.audioPath, () => {
      isLoading = false;
      beginGame(); // This is our new "Auto-Start" trigger
    });
  }
}

function runMainGame() {

  background("#000000");
  drawTargets(activeNotes);


  push ();
  textAlign(LEFT, CENTER);
  textFont(generalFont);
  textSize(windowWidth * 0.02);
  fill(color("#FFFFFF")) 
  text(currentsong.title, width*.02, height/15);
  pop();
  textSize(windowWidth * 0.03);

  textAlign(CENTER, CENTER);
  textFont(scoreFont);
  fill(color(gameblue));
  strokeWeight(0);
  text("SCORE: " + score, width/7, height/2);

  text("STREAK: " + streak, width-width/7, height/2-20);
  fill(color(gamepink));
  text(multiplier + "x", width-width/7, height/2+40);
  pop();

  for (let i = glows.length - 1; i >= 0; i--) {
    glows[i].update();
    glows[i].display();
    if (glows[i].opacity <= 0) {
      glows.splice(i, 1);
    }
  }

  if (currentsong.audioFile.isPlaying()) {
    let playhead = currentsong.audioFile.currentTime();
  
  // Ensure we don't go out of bounds of the array
      if (currentStep < currentsong.arrangement.length) {
        let nextNoteHitTime = (currentStep * (stepInterval / 1000)) + currentsong.offset;
        //nextNoteHitTime increments by stepinterval (converted to seconds) each time, shifted by song offset.
    
        if (playhead >= nextNoteHitTime - travelTime) { //=spawn time, if it is time to spawn the next note (becuase it needs time to travel to the target)
          spawnNotes(currentsong.arrangement[currentStep], nextNoteHitTime); //currentstep describes which note of the arrangment we are on
          currentStep++;
        }
    }
  }
  
  for (let i = activeNotes.length - 1; i >= 0; i--) {
    activeNotes[i].update(currentsong.audioFile.currentTime()); //notes get drawn here
    activeNotes[i].display();
    
    if (activeNotes[i].isDead) {
    activeNotes.splice(i, 1); //deletes the note at that index
  }
  }

  if(!currentsong.audioFile.isPlaying() && currentStep > 0 && !gameCompleted) {
    console.log(p1Hits + "/" + currentsong.p1Total);
    console.log(p2Hits + "/" + currentsong.p2Total);

    p1Percent = (p1Hits / currentsong.p1Total) * 100;
    p2Percent = (p2Hits / currentsong.p2Total) * 100;

    if (p1Percent >=90 && p2Percent >=90) {
      score *= 1.50;
      accuracybonus = true;
    }
    teamName = "";
    socket.emit('checkQualification', score)
    gameState = "END";

  }

}

function handleHit(buttonNumber) {

    //every time a button is hit and the socket receives it, every note in activenotes array is 
    //scanned, and the one that has the matching hit time and the correct button number is killed
    let hitTime = currentsong.audioFile.currentTime(); //gets current time from the song object in seconds
    let hitWindow = 0.14; // time forgiveness

    // data is the number (1-5) sent from your bridge.js
    if (buttonNumber > 0) {
        for (let i = activeNotes.length - 1; i >= 0; i--) {
            let checknote  = activeNotes[i];

            // 1. Is it the right button?
            if (checknote.buttonIndex === buttonNumber) {
                let timeGap = abs(hitTime - checknote.targetTime);//difference between when note is hit and the target time of the note
                // 2. Is it within the hit window?
                if (timeGap < hitWindow) {
                    streak++;
                    if(streak > 100) {
                      multiplier = 5;
                    }
                    if(streak > 75) {
                    multiplier = 4;
                    } else if (streak > 50) {
                    multiplier = 3;
                    } else if (streak > 25) {
                    multiplier = 2;
                    } else {
                    multiplier = 1;
                    }

                    score += (50*multiplier);

                    if (checknote.player === 1) {
                    p1Hits ++;
                    }

                    if (checknote.player === 2) {
                    p2Hits ++;
                    }

                    // SUCCESS: Kill the note immediately so it vanishes from the screen
                    checknote.isDead = true; 
                    console.log("Hit on button: " + buttonNumber);    
                    // Stop the loop so we don't accidentally hit two notes with one press
                    
                    let angle = (buttonNumber - 1) * 72 - 90;
                    let tx = width/2 + cos(radians(angle)) * targetDistance;
                    let ty = height/2 + sin(radians(angle)) * targetDistance;
                    let pColor = checknote.player === 1 ? color(p1Color) : color(p2Color);

                    glows.push(new Glow(tx, ty, pColor));
                }
            }
        }
    }
} 

function drawStartScreen() {
    // Left Side: Title
    background(0);
    textAlign(LEFT, CENTER);
    textFont(titleFont);
    textSize(windowWidth * 0.08);
    fill(p1Color);
    text("ONBEAT", width * 0.1, height/2 - height*.09);
    fill(p2Color);
    text("DUO", width * 0.1, height/2 + height*.09);

    for (let btn of songButtons) {
    btn.display();
  }

    if (endMusic.isPlaying()) endMusic.stop();
    if (!themeMusic.isPlaying()) themeMusic.loop();
  
  navButtons[0].display(); // Leaderboard Button

  // Status messages
  textFont(generalFont);
  textSize(20);
  fill(255);
}

function drawEndScreen() {

    if (themeMusic.isPlaying()) {
        themeMusic.stop();
    }

    if(!endMusic.isPlaying()) {
        endMusic.loop();
    }

    push()
    background(color("#000000"));
    textAlign(CENTER, CENTER);
    textSize(width*.05);
    strokeWeight(0);
    textFont(generalFont);

    fill(p1Color);
    text("PLAYER 1 ACCURACY: " + nf(p1Percent, 0, 1) + "%", width/2, height/3-height*.17);
    fill(p2Color);
    text("PLAYER 2 ACCURACY: " + nf(p2Percent, 0, 1) + "%", width/2, height/3 );

    if (accuracybonus) {
      fill(color("#ff27f1"));
      text("ACCURACY BONUS! +50% ", width/2, height/2);
    }
    fill(color("#44e0ff"));
    text("FINAL SCORE: " + floor(score), width/2, height*(2/3));
    pop()
}

function keyPressed() {
  if (gameState === "TEAM_NAME") {
    
    if (keyCode === ENTER) {
      if (teamName.length > 0) {
        submitFinalScore(teamName, floor(score)); 
        gameState = "LEADERBOARD";
      } else {
        gameState = "START";
      }
    } 
    
    else if (keyCode === BACKSPACE) {
      teamName = teamName.substring(0, teamName.length - 1);
    } 
    
    // Only allow actual letters/numbers and CAP the length at 15
    else if (key.length === 1 && teamName.length < 20) {
      teamName += key;
    }
  }
}

// Keep keyTyped empty or remove it to avoid double-firing
function keyTyped() {
  return false; // Prevents default browser behavior
}

function submitFinalScore(name, finalScore) {
  let data = {
    name: name.toUpperCase(), // Professional touch: make all names caps
    score: finalScore
  };
  
  socket.emit('submitScore', data);
}

function drawLeaderboardScreen() {

  if(currentsong){

    if (currentsong.audioFile.isPlaying()){
    currentsong.audioFile.stop();
    }
  }

  if(themeMusic.isPlaying()) {
    themeMusic.stop();
  }

  if(!endMusic.isPlaying()) {
    endMusic.loop();
  }
  push();
  textAlign(CENTER, TOP);
  
  background(0);
  // 1. Header
  fill(color(gameyellow));
  textFont(scoreFont);
  textSize(windowWidth * 0.055);
  text("LEADERBOARD", width / 2, height/9);

  // 2. Setup Column Variables
  textFont(generalFont);
  textSize(windowWidth * .02);
  let startY = 240;      // Where the first name starts
  let rowSpacing = 70;   // Space between each row
  let leftColX = width * 0.3;
  let rightColX = width * 0.7;

  // 3. Draw the Top 10 (Split into two columns)
  for (let i = 0; i < 10; i++) {
    // Determine which column we are in
    let isLeft = i < 5;
    let xPos = isLeft ? leftColX : rightColX;
    
    // Reset Y for the second column (subtract 5 from index)
    let displayIndex = isLeft ? i : i - 5;
    let yPos = startY + (displayIndex * rowSpacing);

    // Check if data actually exists for this spot
    if (currentLeaderboard && currentLeaderboard[i]) {
      let entry = currentLeaderboard[i];
      
      // Draw Rank and Name
      textAlign(LEFT, TOP);
      fill(255);
      text((i + 1) + ". " + entry.name, xPos - 220, yPos);
      
      // Draw Score
      textAlign(RIGHT, TOP);
      fill(color(gamepink)); // Pink for the score
      text(floor(entry.score), xPos + 220, yPos);
    } else {
      // Draw placeholders if the leaderboard isn't full yet
      textAlign(CENTER, TOP);
      fill(100);
      text((i + 1) + ". ---", xPos, yPos);
    }
  }
  pop();
}

function drawTeamNameScreen() {

    if (currentsong.audioFile.isPlaying()) {
        currentsong.audioFile.stop();
    }

    if (themeMusic.isPlaying()) {
        themeMusic.stop();
    }

    if (!endMusic.isPlaying()) {
        endMusic.loop();
    }
  push();
  background(0, 150); // Darken the background slightly
  textAlign(CENTER, CENTER);

  // 1. The Header
  fill("#6bffba"); // Success Green
  textSize(windowWidth * 0.06);
  textFont(titleFont);
  text("NEW HIGH SCORE!", width / 2, height * 0.3);

  // 2. The Current Score
  fill(255);
  textSize(windowWidth * 0.03);
  text("SCORE: " + floor(score), width / 2, height * 0.4);

  // 3. The Input Box Area
  fill(255);
  textSize(windowWidth * 0.03);
  
  // Add a blinking underscore (_) to act as a cursor
  let cursor = (frameCount % 60 < 30) ? "_" : " "; 
  text("ENTER NAME: " + teamName + cursor, width / 2, height * 0.55);

  // 4. Instructions
  textSize(windowWidth * 0.015);
  fill(200);
  text("TYPE YOUR NAME AND PRESS ENTER TO SAVE", width / 2, height * 0.7);
  text("PRESS ENTER WITH NO NAME TO SKIP", width / 2, height * 0.75);
  
  pop();
}

// 2. Create a helper function to count the notes
function countNotes(arr, playerIndex) {
  return arr.filter(step => step[playerIndex] > 0).length;
}