let replay_iyaz = { //left index is p1, right is p2
  title: "Replay - Iyaz",
  bpm: 182,               // this is double time to enable eighth notes
  offset: 3.6,//3.6,            // Your specific songOffset
  audioPath: './audio_files/Replay_Iyaz.mp3',
  audioFile: null,        // This will hold the loaded sound object
  p1Total: "",
  p2Total: "",  // Checks index 1
  arrangement: [          // Your existing note array
//1     &         2     &       3      &       4      &       5      &       6      &       7      &       8      &
//shawty's like a melody in my head that i can't keep out got me singing like
[0,0], [0,0],  [5,0], [0,0],  [0,0], [0,0],  [0,2], [0,0],  [0,0], [0,0],  [5,0], [0,0],  [0,0], [0,0],  [0,2], [0,0], //chorus
////na na na na every day, it's like my ipod stuck on replay
[5,0], [0,0],  [5,0], [0,0],  [0,2], [0,0],  [0,2], [0,0],  [5,0], [0,0],  [5,0], [0,0],  [0,2], [0,0],  [0,2], [0,0],
//shawty's like a melody in my head that i can't keep out got me singing like
[0,0], [0,0],  [5,2], [0,0],  [0,0], [0,0],  [4,3], [0,0],  [0,0], [0,0],  [5,2], [0,0],  [0,0], [0,0],  [4,3], [0,0],
////na na na na every day, it's like my ipod stuck on replay
[5,2], [0,0],  [5,2], [0,0],  [4,3], [0,0],  [4,3], [0,0],  [5,2], [0,0],  [5,2], [0,0],  [4,3], [0,0],  [4,3], [0,0],


//remember the first time we met, you was at the mall with your friend
[0,0], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [3,1], [0,0],  [0,0], [0,0],  [5,1], [0,0],  [0,0], [0,0],  [3,4], [0,0],//v1
//i was scared to approach ya but then ya came closer hopin you would give me a chance
[5,2], [0,0],  [2,5], [0,0],  [4,3], [0,0],  [3,4], [0,0],  [5,2], [0,0],  [2,5], [0,0],  [4,3], [0,0],  [3,4], [0,0],
//who would have ever knew that we would ever be more than friends
[0,3], [0,3],  [2,1], [0,3],  [0,0], [0,0],  [2,3], [0,0],  [0,3], [0,3],  [2,1], [0,3],  [0,0], [0,0],  [2,3], [0,0],
//we're real worldwide breaking all the rules, she like a song played again and again
[4,0], [4,0],  [2,1], [4,0],  [0,0], [0,0],  [4,1], [0,0],  [4,0], [4,0],  [2,1], [4,0],  [0,0], [0,0],  [4,1], [0,0],


//that girl like something off a poster, that girl is a dime they say
[4,3], [4,3],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0],  [3,4], [3,4],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0], //prechorus
//that girl is a gun to my holster, she's running through my mind all day
[4,3], [4,3],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0],  [2,1], [0,0],  [2,1], [0,0],  [2,1], [0,0],  [2,1], [0,0],


//shawty's like a melody in my head that i can't keep out got me singing like
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [0,0],  [1,4], [0,0],  [2,3], [2,3],  [4,5], [0,0],//chorus
////na na na na every day, it's like my ipod stuck on replay
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [5,1],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],
//shawty's like a melody in my head that i can't keep out got me singing like
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [0,0],  [1,4], [0,0],  [2,3], [2,3],  [4,5], [0,0],
////na na na na every day, it's like my ipod stuck on replay
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [5,1],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],


//see you been all around the globe, not once did you leave my mind
[0,0], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [3,1], [0,0],  [0,0], [0,0],  [5,1], [0,0],  [0,0], [0,0],  [3,4], [0,0],//v1
//we talk on the phone, from night till the morn, girl you really change my life
[5,2], [0,0],  [2,5], [0,0],  [4,3], [0,0],  [3,4], [0,0],  [5,2], [0,0],  [2,5], [0,0],  [4,3], [0,0],  [3,4], [0,0],
//doing thins i never do, i'm in the kitchen cooking things she likes
[0,3], [0,3],  [2,1], [0,3],  [0,0], [0,0],  [2,3], [0,0],  [0,3], [0,3],  [2,1], [0,3],  [0,0], [0,0],  [2,3], [0,0],
//we're real worldwide breaking all the rules, someday i wanna make you my wife
[4,0], [4,0],  [2,1], [4,0],  [0,0], [0,0],  [4,1], [0,0],  [4,0], [4,0],  [2,1], [4,0],  [0,0], [0,0],  [4,1], [0,0],

//that girl like something off a poster, that girl is a dime they say
[4,3], [4,3],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0],  [3,4], [3,4],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0], //prechorus
//that girl is a gun to my holster, she's running through my mind all day
[4,3], [4,3],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0],  [2,1], [0,0],  [2,1], [0,0],  [2,1], [0,0],  [2,1], [0,0],

//shawty's like a melody in my head that i can't keep out got me singing like
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [0,0],  [1,4], [0,0],  [2,3], [2,3],  [4,5], [0,0],//chorus
////na na na na every day, it's like my ipod stuck on replay
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [5,1],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],
//shawty's like a melody in my head that i can't keep out got me singing like
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [0,0],  [1,4], [0,0],  [2,3], [2,3],  [4,5], [0,0],
////na na na na every day, it's like my ipod stuck on replay
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [5,1],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],

//i can be your melody, girl i could write you a symphony
[1,5], [0,0],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0],  [0,0], [0,0],  [3,2], [0,0],  [0,0], [0,0],  [3,2], [0,0],//bridge
//the one that could fill your fantasies, so come baby girl let's sing with me
[0,0], [0,0],  [1,5], [0,0],  [0,0], [0,0],  [1,5], [0,0],  [0,0], [0,0],  [3,2], [0,0],  [0,0], [0,0],  [3,2], [0,0],
//i can be your melody, girl i could write you a symphony
[5,4], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [1,2], [0,0],
//the one that could fill your fantasies, so come baby girl let's sing with me
[0,0], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [1,2], [0,0],  [0,0], [0,0],  [1,2], [0,0],
//na nanananannan, shawty got me singin
[4,2], [0,0],  [1,5], [4,2],  [0,0], [0,0],  [4,2], [0,0],  [4,2], [0,0],  [1,5], [4,2],  [0,0], [0,0],  [4,2], [0,0],
//na nanananannan, shawty got me singin
[4,2], [0,0],  [1,5], [4,2],  [0,0], [0,0],  [4,2], [0,0],  [4,2], [0,0],  [1,5], [4,2],  [0,0], [0,0],  [4,2], [0,0],

//shawty's like a melody in my head that i can't keep out got me singing like
[4,3], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [2,1], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [0,0], [0,0],//final chorus
////na na na na every day, it's like my ipod stuck on replay
[1,2], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [5,4], [0,0],  [0,0], [0,0],  [0,0], [0,0],  [0,0], [0,0],
//shawty's like a melody in my head that i can't keep out got me singing like
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [0,0],  [1,4], [0,0],  [2,3], [2,3],  [4,5], [0,0],
////na na na na every day, it's like my ipod stuck on replay
[5,1], [0,0],  [1,4], [0,0],  [2,3], [0,0],  [4,5], [0,0],  [5,1], [5,1],  [1,4], [0,0],  [0,0], [0,0],  [0,0], [0,0],

]};