let pokerface_ladygaga = { //left index is p1, right is p2
  title: "PokerFace - Lady Gaga",
  bpm: 119,          
  offset: 2.66,//2.66,            // Your specific songOffset
  audioPath: './audio_files/pokerface_ladygaga.mp3',
  audioFile: null,        // This will hold the loaded sound object
  p1Total: "",
  p2Total: "",  // Checks index 1
  arrangement: [          // Your existing note array

[1,0], [0,0], [2,0], [0,0], [3,0], [0,0], [4,0], [0,0], //intro
[0,1], [0,0], [0,5], [0,0], [0,4], [0,0], [0,3], [0,0], 
[1,0], [0,0], [2,0], [0,0], [3,0], [0,0], [4,0], [0,0],
[0,1], [0,0], [0,5], [0,0], [0,4], [0,0], [0,3], [0,0], 
[0,0], [5,2], [0,0], [3,4], [0,0], [5,2], [0,0], [3,4], 
[0,0], [5,2], [0,0], [3,4], [0,0], [5,2], [0,0], [3,4], 

//i wanna hold em like they do in texas please
[2,0], [2,0], [2,0], [2,0], [0,4], [0,4], [0,4], [0,4],//verse
//fold em let em hit me raise it baby stay with me
[3,0], [3,0], [3,0], [3,0], [0,5], [0,5], [0,5], [0,5], 
//lovegame intuition play the cards with spades to start
[0,0], [1,5], [0,0], [1,5], [0,0], [3,2], [0,0], [3,2], 
//and after he's been hooked i'll play the one that's on his heart
[0,0], [3,2], [0,0], [3,2], [0,0], [5,1], [0,0], [5,1], 
//oh, whoah oh oh, oh whoa-oa oh
[2,0], [2,0], [2,0], [2,0], [0,4], [0,4], [0,4], [0,4], 
//i'll get him hot, show him what i've got
[3,0], [3,0], [3,0], [3,0], [0,5], [0,5], [0,5], [0,5], 
//oh, whoah oh oh, oh whoa-oa oh
[0,0], [1,5], [0,0], [1,5], [0,0], [3,2], [0,0], [3,2], 
//i'll get him hot, show him what i've got
[0,0], [3,2], [0,0], [3,2], [0,0], [5,1], [0,0], [5,1], 

//can't read my, can't read my, no he can't read my
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1], //chorus
//poker face
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1],
//can't read my, can't read my, no he can't read my
[1,2], [1,2], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 
//poker face
[2,1], [2,1], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 
//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5], 
//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5], 

//i wanna roll with him a hard pair we will be
[2,0], [2,0], [2,0], [2,0], [0,4], [0,4], [0,4], [0,4],//verse
//a little gambling is fun when you're with me
[3,0], [3,0], [3,0], [3,0], [0,5], [0,5], [0,5], [0,5], 
//russian roulette is not the same without a gun
[0,0], [1,5], [0,0], [1,5], [0,0], [3,2], [0,0], [3,2], 
//and baby when it's love if it's not rough it isn't fun
[0,0], [3,2], [0,0], [3,2], [0,0], [5,1], [0,0], [5,1], 


//oh, whoah oh oh, oh whoa-oa oh
[2,0], [2,0], [2,0], [2,0], [0,4], [0,4], [0,4], [0,4], 
//i'll get him hot, show him what i've got
[3,0], [3,0], [3,0], [3,0], [0,5], [0,5], [0,5], [0,5], 
//oh, whoah oh oh, oh whoa-oa oh
[0,0], [1,5], [0,0], [1,5], [0,0], [3,2], [0,0], [3,2], 
//i'll get him hot, show him what i've got
[0,0], [3,2], [0,0], [3,2], [0,0], [5,1], [0,0], [5,1], 

//can't read my, can't read my, no he can't read my
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1], //chorus
//poker face
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1],
//can't read my, can't read my, no he can't read my
[1,2], [1,2], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 
//poker face
[2,1], [2,1], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 
//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5], 
//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5], 

[1,0], [0,1], [3,0], [0,3], [1,0], [0,1], [3,0], [0,3], //break
[4,0], [0,4], [2,0], [0,2], [4,0], [0,4], [2,0], [0,2],

//i wont tell you that i love you kiss or hug you cause i'm bluffin with my
[0,0], [1,5], [0,0], [4,5], [0,0], [1,3], [0,0], [4,3], //bridge
//muffin im not lyin im just stunning with my love glue gunnin
[0,0], [1,5], [0,0], [4,5], [0,0], [1,3], [0,0], [4,3], 
//just like a chick in the casino take your bank before i pay you out
[4,1], [4,1], [2,3], [2,3], [5,2], [5,2], [3,5], [3,5], 
// i promise this promise check this hand cause i'm marvelous
[4,1], [4,1], [2,3], [2,3], [5,2], [5,2], [3,5], [3,5], 

//cant read my, cant read my, no he can't read my 
[1,3], [0,0], [0,0], [0,0], [4,2], [0,0], [0,0], [0,0], //chorus
//poker face
[2,5], [0,0], [0,0], [0,0], [5,1], [0,0], [0,0], [0,0], 

//can't read my, can't read my, no he can't read my
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1],
//poker face
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1],

//can't read my, can't read my, no he can't read my
[1,2], [1,2], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 
//poker face
[2,1], [2,1], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 

//can't read my, can't read my, no he can't read my
[3,5], [3,5], [5,4], [5,4], [4,3], [4,3], [2,1], [2,1], 
//poker face
[3,5], [3,5], [5,4], [5,4], [4,3], [4,3], [2,1], [2,1], 

//can't read my, can't read my, no he can't read my
[2,1], [2,1], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 
//poker face
[2,1], [2,1], [5,2], [5,2], [1,4], [1,4], [4,3], [4,3], 

//can't read my, can't read my, no he can't read my
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1],
//poker face
[1,4], [1,4], [4,3], [4,3], [3,5], [3,5], [2,1], [2,1],

//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5],
//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5], 

//p p p p poker face f f f fuck her face
[1,2], [3,4], [4,1], [5,3], [1,2], [3,4], [4,1], [5,1],
//p p p p poker face f f f fuck her face
[1,2], [3,4], [4,1], [5,3], [1,2], [3,4], [4,1], [5,1],

//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5],
//p p p p poker face f f f fuck her face
[0,0], [1,2], [0,0], [4,5], [0,0], [1,2], [0,0], [4,5], 

]};