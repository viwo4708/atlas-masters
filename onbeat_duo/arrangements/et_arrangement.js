//OK HERE HOW THIS WORKS. each sub array [0,0] is a beat. the left number is the button player 1 hits, the right button is the one player 2 hits. The song is divided into verses, choruses, and the bridge. ET BY KATY PERRY 

let et_katyperry = {
  title: "E.T. - Katy Perry",
  bpm: 150,               // Use the actual BPM of the track
  offset: 6.87,//6.87 ,            // Your specific songOffset +.02 for bluetooth speaker
  audioPath: './audio_files/ET_KatyPerry.mp3',
  audioFile: null,        // This will hold the loaded sound object
  p1Total: "",
  p2Total: "", 
  arrangement: [          // Your existing note array
  //FIRST VERSE, p1 starts with main beat (bass bass snare) and p2 has rhythm over that
  //you're so hypnotizing
  [5,0], [5,2],  [3,0], [0,2],  [5,0], [5,0],  [3,4], [0,4],
  //could you be the devil, could you be an angel
  [5,0], [5,2],  [3,0], [0,2],  [5,0], [5,0],  [3,4], [0,4],
  //your touch, magnetizing
  [4,0], [4,5],  [2,0], [0,5],  [4,0], [4,0],  [2,3], [0,3],
  //feels like i am floating, leaves my body glowing
  [4,0], [4,5],  [2,0], [0,5],  [4,0], [4,0],  [2,3], [0,3],
  //they say be afraid
  [1,0], [1,2],  [3,0], [0,2],  [1,0], [1,0],  [3,4], [0,4],
  //you're not like the others futuristic lover
  [1,0], [1,2],  [3,0], [0,2],  [1,0], [1,0],  [3,4], [0,4],
  //different DNA
  [2,0], [2,3],  [4,0], [0,3],  [2,0], [2,0],  [4,1], [0,1],
  //they don't understand you   you're from a 
  [2,0], [2,3],  [4,0], [0,3],  [2,0], [2,0],  [4,1], [0,1],
  
  //PRE CHORUS, switch now p2 has main beat and p1 has rhythm over
  //whole nother world
  [0,2], [5,2],  [0,3], [5,0],  [0,2], [0,2],  [2,3], [2,0],
  //a different dimension
  [0,2], [5,2],  [0,3], [5,0],  [0,2], [0,2],  [2,3], [2,0],
  //you opened my eyes
  [1,2], [1,2],  [3,4], [3,4],  [1,2], [1,2],  [3,4], [3,4],
  //and I'm ready to go lead me into the light
  [2,3], [2,3],  [1,5], [1,5],  [2,3], [2,3],  [1,5], [1,5],
  
  //CHORUS //p2 still has main beat
  //kiss me, k-k-kiss me
  [3,4], [0,4],  [5,1], [0,0],  [3,4], [3,4],  [5,1], [0,0],
  //infect me with your love and fill me with your poison
  [1,4], [1,4],  [4,1], [4,0],  [1,4], [1,4],  [4,1], [4,0],
  //take me, t-t-take me
  [3,5], [0,5],  [4,2], [0,0],  [3,5], [3,5],  [4,2], [0,0],
  //wanna be your victim, ready for abduction
  [2,5], [2,5],  [5,2], [5,0],  [2,5], [2,5],  [5,2], [5,0],
  //              boy           you're an       alien
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              your          touch so       foreign
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              it's          supernatural   
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  //              ex            traterrestrial
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  
  [0,2], [0,2],  [1,0], [0,0],  [0,2], [0,2],  [1,0], [0,0],
  
  //SECOND VERSE
  //you're so supersonic
  [5,0], [5,2],  [3,0], [0,2],  [5,0], [5,0],  [3,4], [0,4],
  //wanna feel your power stun me with your laser
  [5,0], [5,2],  [3,0], [0,2],  [5,0], [5,0],  [3,4], [0,4],
  //your kiss is cosmic
  [4,0], [4,5],  [2,0], [0,5],  [4,0], [4,0],  [2,3], [0,3],
  //every move is magic                        you're from a 
  [4,0], [4,5],  [2,0], [0,5],  [4,0], [4,0],  [2,3], [0,3],
 
  //PRE CHORUS
  //whole nother world
  [0,1], [5,1],  [0,3], [5,0],  [0,1], [0,1],  [2,3], [2,0],
  //a different dimension
  [0,1], [5,1],  [0,3], [5,0],  [0,1], [0,1],  [2,3], [2,0],
  //you opened my eyes
  [1,2], [1,2],  [3,4], [3,4],  [1,2], [1,2],  [3,4], [3,4],
  //and I'm ready to go lead me into the light
  [2,3], [2,3],  [1,5], [1,5],  [2,3], [2,3],  [1,5], [1,5],
  
  //CHORUS
  //kiss me, k-k-kiss me
  [3,4], [0,4],  [5,1], [0,0],  [3,4], [3,4],  [5,1], [0,0],
  //infect me with your love and fill me with your poison
  [1,4], [1,4],  [4,1], [4,0],  [1,4], [1,4],  [4,1], [4,0],
  //take me, t-t-take me
  [3,5], [0,5],  [4,2], [0,0],  [3,5], [3,5],  [4,2], [0,0],
  //wanna be your victim, ready for abduction
  [2,5], [2,5],  [5,2], [5,0],  [2,5], [2,5],  [5,2], [5,0],
  //              boy           you're an       alien
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              your          touch so       foreign
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              it's          supernatural   
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  //              ex            traterrestrial
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  
  //BRIDGE
  //this is transcendental
  [1,2], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [0,0], [0,0],
  //on another level
  [3,5], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [0,0], [0,0],
  //boy, you're my lucky star
  [4,2], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [0,0], [0,0],
  //
  [3,1], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [5,4], [0,0],
  //wanna walk on your wavelength
  [1,0], [1,0],  [0,2], [0,0],  [1,0], [1,0],  [0,2], [0,0],
  //and be there when you vibrate
  [1,0], [1,0],  [0,2], [0,0],  [1,0], [1,0],  [0,2], [0,0],
  //for you i'd risk it
  [0,4], [0,4],  [5,0], [0,0],  [0,4], [0,4],  [5,0], [0,0],
  //a-aall
  [0,4], [0,4],  [5,0], [0,0],  [0,4], [0,4],  [5,0], [0,0],
  //                            aaaaaaaaalll
  [0,4], [0,4],  [5,0], [0,0],  [5,4], [0,0],  [5,4], [0,0],
  
  //CHORUS
  //kiss me, k-k-kiss me
  [3,4], [0,4],  [5,1], [0,0],  [3,4], [3,4],  [5,1], [0,0],
  //infect me with your love and fill me with your poison
  [1,4], [1,4],  [4,1], [4,0],  [1,4], [1,4],  [4,1], [4,0],
  //take me, t-t-take me
  [3,5], [0,5],  [4,2], [0,0],  [3,5], [3,5],  [4,2], [0,0],
  //wanna be your victim, ready for abduction
  [2,5], [2,5],  [5,2], [5,0],  [2,5], [2,5],  [5,2], [5,0],
  //              boy           you're an       alien
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              your          touch so       foreign
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              it's          supernatural   
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  //              ex            traterrestrial
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  
  //
  [2,3], [2,0],  [5,3], [5,0],  [2,4], [2,0],  [5,4], [5,0],
  //              ex            traterrestrial
  [2,3], [2,0],  [5,3], [5,0],  [2,4], [2,0],  [5,4], [5,0],
  //
  [1,4], [0,4],  [1,2], [0,0],  [3,4], [0,4],  [3,2], [0,0],
  //              ex            traterrestrial
  [1,4], [0,4],  [1,2], [0,0],  [3,4], [0,4],  [3,2], [0,0],
  
  //              boy           you're an       alien
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              your          touch so       foreign
  [3,0], [3,0],  [1,4], [0,0],  [3,4], [3,4],  [1,2], [0,0],
  //              it's          supernatural   
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  //              ex            traterrestrial
  [0,3], [0,3],  [4,1], [0,0],  [4,3], [4,3],  [2,1], [0,0],
  
  ]
};