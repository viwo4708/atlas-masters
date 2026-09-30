const SONG_BPM = 123.5; // Set your song's exact tempo
const SUBDIVISION = 2; //8th notes

// 1 = Clap Target | 0 = Silence
// Each block below represents  8 full beats, each elem is an 8th note
const rhythmGrid = [
  //1 &    2 &    3 &    4 &    5 &    6 &    7 &    8 &
    0,0,   1,0,   0,0,   1,0,   0,0,   1,0,   0,0,   1,0, //im freezing outside, i feel my skin tight
    0,0,   1,0,   0,0,   1,0,   0,0,   1,0,   1,0,   1,0, //my coat is inside, but i look up at you
    0,0,   1,0,   0,0,   1,0,   0,0,   1,0,   0,0,   1,0, //i tracked your plane ride, for when youre in tonight
    0,0,   1,0,   1,0,   1,0,   1,0,   1,0,   1,0,   1,0, //tell me when is the next time i'll run into you
    
    1,1,   1,0,   1,1,   1,0,   0,0,   1,0,   0,0,   1,0, //it sounds insane right, i'll take the same flight
    1,1,   1,0,   1,1,   1,0,   0,0,   1,0,   1,0,   1,0, //wait at your bedside, i'll land right next to you
    1,0,   1,0,   0,0,   0,0,   1,1,   1,0,   0,0,   0,0, //im goin stateside, where i'll see you tonight
    0,0,   1,0,   0,0,   1,0,   1,0,   1,0,   1,0,   1,0, //tell me when is the next time i'll run into you?
    
    0,0,   1,1,   0,0,   1,0,   0,0,   1,1,   1,1,   1,0, // ah ah
    0,0,   1,1,   0,0,   1,0,   0,0,   1,1,   1,1,   1,1, // ah ah
    0,0,   1,0,   0,0,   1,0,   1,0,   1,0,   1,0,   1,0, // you can be my american hot hot boy
    0,0,   1,0,   0,0,   1,0,   0,0,   1,0,   0,0,   1,0,
    
    1,0,   1,0,   1,0,   0,0,   1,0,   1,0,   1,0,   0,0, //is it right, i don't know, but you're taking my control
    1,0,   1,0,   1,0,   0,0,   1,0,   1,0,   0,0,   0,0, //never been abroad before, now i'm knockin through your door
    1,1,   0,0,   1,1,   0,0,   1,1,   1,0,   0,0,   1,0, //but you're nice, so i'll stay, never met a british girl you say
    0,0,   1,0,   0,0,   1,0,   1,1,   1,1,   1,0,   0,0, //no one treats me this way, all are boys out here the same

    0,1,   0,1,   0,1,   0,1,   1,0,   1,0,   0,0,   1,0, //what can i say, what can i do
    1,0,   1,0,   0,0,   1,0,   1,0,   1,0,   0,0,   1,0, //im tryna be the girl that you're talking to
    0,1,   0,1,   1,1,   1,0,   1,0,   1,0,   1,0,   1,0, //maybe you can be my american hot hot boy
    0,0,   1,0,   0,0,   1,0,   1,1,   1,0,   1,1,   1,0, //you can be my american hot hot boy
    
    0,1,   0,1,   1,0,   1,0,   0,1,   0,1,   0,0,   0,1, //why can't you say, that you want it too
    1,0,   1,0,   1,0,   1,0,   0,0,   1,0,   0,0,   1,1, //im flyin intercontinental with you
    0,1,   0,1,   1,1,   1,0,   1,0,   1,0,   1,0,   1,0, //maybe you can be my american hot hot boy
    0,0,   1,0,   0,0,   1,0,   1,1,   1,0,   1,1,   1,0, //you can be my american hot hot boy

    1,0,   1,0,   1,0,   0,0,   1,0,   1,0,   1,0,   0,0, //all the years i put in for the american dream
    1,0,   1,0,   0,0,   0,0,   1,0,   1,0,   0,0,   0,0, //is it worth all the work if you can't be here with me
    0,0,   1,0,   0,0,   1,0,   0,0,   1,0,   0,0,   1,0, //i fly stockholm to la, in my feelings on the plane
    1,0,   1,0,   0,0,   0,0,   1,0,   1,0,   0,0,   0,0, //worries fade away when i hit the stage

    1,0,   1,0,   0,0,   0,0,   0,0,   0,0,   1,0,   1,0, //ive been touring stateside, kissin my swedish boy over facetime
    1,0,   1,0,   0,0,   0,0,   0,0,   0,0,   0,0,   1,0, //who knew opening up would make me a headline
    1,0,   0,0,   0,0,   0,0,   1,0,   1,0,   1,0,   1,0, //boots that my ego boost, schedule ain't been loose
    1,0,   1,0,   0,0,   0,0,   1,0,   1,0,   0,0,   0,0, //in a minute, yeah i'm that girl i been it

    0,0,   0,0,   0,0,   0,0,                             //ah ah aha ah

    0,0,   1,0,   0,0,   1,0,   0,0,   0,0,   0,0,   1,0, // ooh whoa ooh whoa
    1,0,   1,0,   0,0,   0,0,   0,0,   0,0,   1,0,   1,0, //ooh whoa oooh whoahoaha

    0,1,   0,1,   0,1,   0,1,   1,1,   1,1,   1,1,   1,1, //what can i say, what can i do
    1,1,   1,1,   1,0,   0,0,   0,0,   1,0,   0,0,   1,0, // i tryna be the girl that you're talking to
    1,0,   1,0,   0,0,   0,0,   1,0,   1,0,   1,0,   1,0, // and maybe you can be my american hot hot boy
    1,0,   1,0,   0,0,   0,0,   1,0,   1,1,   1,1,   1,0, //you can be my american hot hot boy

    0,0,   1,0,   0,0,   1,0,   0,0,   1,0,   0,0,   1,0, //why can't you say that you want it too
    0,0,   1,1,   0,0,   1,1,   1,0,   1,0,   1,0,   1,0, // im flying intercontinental with you
    1,1,   1,0,   1,1,   1,0,   1,0,   1,0,   1,0,   1,0, // and maybe you can be my american hot hot boy
    1,0,   1,0,   1,0,   0,0,   0,0,   1,0,   0,0,   1,1, // you can be my american hot hot 

    0,1,   0,1,   1,1,   1,0,   0,0,   0,1,   0,0,   0,1, //is it right, i dont know but youre taking my control
    0,0,   0,1,   0,0,   0,1,   1,1,   1,1,   0,0,   0,1, //never been abroad before now im knockin through your door
    0,0,   1,0,   1,0,   0,0,   0,1,   0,1,   1,1,   0,1, //but you're nice so i'll stay never met a swedish girl you say
    1,0,   1,0,   0,0,   0,1,   0,0,   0,0,   0,0,   0,0, //no one treats me this way, are all boys out here the same


];