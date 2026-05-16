let gameState = "START"; //START, PLAYING, TEAM_NAME, END, LEADERBOARD
let songs = {};
let currentsong;
let teamName = "";

let gameblue = "#4ce1ff";
let gamepink = "#fd81ff";
let gameyellow = "#f7ff5d";

let currentLeaderboard;

let teamQualifies = false;
let themeMusic;
let endMusic;
let isLoading = false;

let menuButtons = [];
let songButtons = [];
let navButtons = [];


let score = 0;
let streak = 0;
let multiplier = 1;
let p1Hits = 0;
let p2Hits = 0;
let p1Total = 0;
let p2Total = 0;
let p1Percent = 0;
let p2Percent = 0;
let gameCompleted = false;
let accuracybonus = false;
let glows = [];
let p1Color = "#6bffba";
let p2Color = "#935afd";

let targetDistance = 280; // Distance from center to green circles
let noteSpeed;      // Pixels per second
let travelTime;           // We will calculate this in mousepressed for each song!
let startTime;
let stepInterval;
let lastStepTime = 0;
let currentStep = 0;
let activeNotes = []; //array to hold the notes 