let evenpagenum;
let oddpagenum;

function pageforward() {

    const rightside = document.getElementById("right-div");
    const rightpage = rightside.querySelector('img');
    const leftside = document.getElementById("left-div");
    const leftpage = leftside.querySelector('img');
    
    if(rightpage === '' ) {
        return;
    }
    else if(rightpage.src.includes("design-club-pages/frontcover.png")) {
        evenpagenum = 2;
        oddpagenum = 1;
        rightpage.src = "design-club-pages/" + evenpagenum + ".png"
        let img = document.createElement("img")
        img.src = "design-club-pages/" + oddpagenum + ".png"
        img.className = "mag-page";
        console.log(img);
        leftside.appendChild(img);
        
    }
    else if(evenpagenum === 8) {
        console.log ("page8 triggered")
        leftpage.src = "design-club-pages/backcover.png"
        rightside.removeChild(rightside.querySelector('img'));
    }
    else {
        evenpagenum += 2;
        oddpagenum += 2;
        rightpage.src = "design-club-pages/" + evenpagenum + ".png"
        leftpage.src = "design-club-pages/" + oddpagenum + ".png"
    }
}

function pagebackward() {

    const rightside = document.getElementById("right-div");
    const rightpage = rightside.querySelector('img');
    const leftside = document.getElementById("left-div");
    const leftpage = leftside.querySelector('img');
    
    if(leftpage === '' ) {
        return;
    }
    else if(leftpage.src.includes("design-club-pages/backcover.png")) {
        (console.log("backcover triggered"))
        evenpagenum = 8;
        oddpagenum = 7;
        leftpage.src = "design-club-pages/" + oddpagenum + ".png"
        let img = document.createElement("img")
        img.src = "design-club-pages/" + evenpagenum + ".png"
        img.className = "mag-page";
        console.log(img);
        rightside.appendChild(img);
        
    }
      else if(evenpagenum === 2) {
        console.log ("page2 triggered")
        rightpage.src = "design-club-pages/frontcover.png"
        leftside.removeChild(leftside.querySelector('img'));
    }
    else {
        evenpagenum -= 2;
        oddpagenum -= 2;
        rightpage.src = "design-club-pages/" + evenpagenum + ".png"
        leftpage.src = "design-club-pages/" + oddpagenum + ".png"
    }
}