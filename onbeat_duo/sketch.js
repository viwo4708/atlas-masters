function preload() {
  et_katyperry.audioFile = loadSound(et_katyperry.audioPath); //DELETE LATER
  themeMusic = loadSound("./audio_files/introhiphop.mp3");
  endMusic = loadSound("./audio_files/endfunk.mp3")
  titleFont = loadFont('./fonts/Sansation-Bold.ttf');
  scoreFont = loadFont("./fonts/Audiowide-Regular.ttf")
  generalFont = loadFont("./fonts/Play-Regular.ttf")
}

function setup() {
  //DONT FORGET TO PUT SONGS HERE GENIUS
  let allSongs = [et_katyperry, replay_iyaz, pokerface_ladygaga, omg_usher, bedrock_youngmoney]; //placeholdersong would go in here too, whatever it ends up being
  
  allSongs.forEach(song => {
    song.p1Total = song.arrangement.filter(step => step[0] > 0).length;
    song.p2Total = song.arrangement.filter(step => step[1] > 0).length;
  });

  createCanvas(windowWidth, windowHeight);
  themeMusic.loop();
  
  CreateButtons();

  socket = io.connect('http://localhost:3000'); //create a connection to the server

  socket.on('rankResult', function(qualifies) {
    console.log("Received rankResult from server:", qualifies);
    // Update our global variable with the 'qualifies' value from the server
    teamQualifies = qualifies;
  });

  socket.on('arduinoData', (buttonNumber) => { 
    handleHit(buttonNumber);
  });//arduinoData comes from the server! and gets assigned to data

  socket.emit('getLeaderboard');

  //Listen for the actual data to display on the leaderboard
  socket.on('leaderboardUpdate', (data) => {
    console.log("Leaderboard received from server:", data);
    currentLeaderboard = data; // 'data' is the array from your JSON file
  });
}

function draw() {

  if (gameState === "START") {

    drawStartScreen();

  } else if (gameState === "PLAYING") {

    runMainGame();

  } else if (gameState === "TEAM_NAME") {

    drawTeamNameScreen();

  } else if (gameState === "END") {

    drawEndScreen();

  } else if (gameState === "LEADERBOARD") {

    drawLeaderboardScreen();

  }
}