const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const fs = require('fs');

//Setup Express and the Server
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

//Serve p5.js files from the current folder. no filename means entire folder is served
app.use(express.static('./'));

//3. Setup Serial Port (Check COM port in Device Manager!)
const arduinoPort = new SerialPort({ 
  path: 'COM5', 
  baudRate: 9600 
});

const parser = arduinoPort.pipe(new ReadlineParser({ delimiter: '\r\n' })); //pipes input from arduino port into parser, delimited by newline

//Connection Logic
io.on('connection', (socket) => {
  console.log('p5.js sketch has connected!');

  socket.on('getLeaderboard', () => { //waits for sketch to emit a message called getLeaderboard
  fs.readFile('leaderboard.json', 'utf8', (err, data) => { //reads file called leaderboard.json and assigns it to data
    if (!err) socket.emit('leaderboardUpdate', JSON.parse(data));//sketch awaits this message to get the data, parsed into a json object
  });
  });

  socket.on('submitScore', (data) => { //waits for sketch to emit a message called submitScore
    // 1. Read the existing leaderboard file
    fs.readFile('leaderboard.json', 'utf8', (err, jsonString) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      } //server pulls current leaderboard file from directory

      // 2. Turn the text into a real json object
      let leaderboard = JSON.parse(jsonString);

      // 3. Add the new score (the 'data' object contains {name, score})
      leaderboard.push(data);

      // 4. Sort from highest to lowest
      leaderboard.sort((a, b) => b.score - a.score);

      // 5. Slice it so we only keep the Top 10
      let topTen = leaderboard.slice(0, 10);

      // 6. Save it back to the file
      fs.writeFile('leaderboard.json', JSON.stringify(topTen, null, 2), (err) => {
        if (err) console.log("Error writing file:", err);
        else console.log("Leaderboard updated!");
        
        // 7. Tell everyone the new leaderboard is ready
        io.emit('leaderboardUpdate', topTen);
        console.log("New high score broadcasted!");
      });
    });
  });

  // This is the "Judge"
  socket.on('checkQualification', (clientScore) => { //waits for sketch to emit a signal called checkQualification
    // 1. Read the current leaderboard
    fs.readFile('leaderboard.json', 'utf8', (err, data) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      }

      let leaderboard = JSON.parse(data);
      let qualifies = false;

      // 2. The Logic: 
      // Is the list not full yet? (Under 10 entries)
      // OR is the current score higher than the 10th place score?
      if (leaderboard.length < 10 || clientScore > leaderboard[leaderboard.length - 1].score) {
        qualifies = true;
      }

      socket.emit('rankResult', qualifies); //sends a signal called rankResult
      console.log(`Score ${clientScore} qualification: ${qualifies}`);
    });
  });

});

parser.on('data', (data) => {
  let cleanData = data.trim();
  if (cleanData) {
    // Convert to a number here once
    let buttonNum = parseInt(cleanData); 
    
    if (!isNaN(buttonNum)) {
      console.log("Arduino sent number:", buttonNum);
      io.emit('arduinoData', buttonNum); // Sends an actual number
    }
  }
});

// 5. Start the server
server.listen(3000, () => {
  console.log('Server running! Open http://localhost:3000 in your browser');
});