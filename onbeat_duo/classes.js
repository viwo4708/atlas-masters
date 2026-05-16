class Note {
  constructor(buttonIndex, player, targetTime, travel_time) {
    this.buttonIndex = buttonIndex; //assigns button number from constructor 
    this.player = player; //assigns player number from index
    this.targetTime = targetTime; // The exact second this note should hit the target
    this.spawnTime = targetTime - travel_time; //needs to appear before it hits target, so subtract amount of time it takes to travel
   
    
    this.angle = (this.buttonIndex - 1) * 72 -90; //angle the note must travel to get to the right target
    this.distance = 0; //start from center of circle
    this.isDead = false;
  }
  
update(currentTime) {
  // Map the time to distance
  this.distance = map(currentTime, this.spawnTime, this.targetTime, 0, targetDistance);

  // If the note has passed the target by 0.7 seconds, it's a "Miss"
  // and we delete it then.
  if (currentTime > this.targetTime + 0.7) {
    this.isDead = true;
    streak = 0;
    multiplier = 1;
  }
}
  
  display() {
    push();
    translate(width/2, height/2); //move to center of canvas
    rotate(radians(this.angle)); //point toward the button

    let baseColor = this.player == 1 ? color(p1Color) : color(p2Color);

  // --- DRAW THE GLOW ---
  // We draw 3-4 larger, faint circles behind the main note
    noFill();
    for (let i = 2; i > 0; i--) {
      let alpha = map(i, 0, 2, 20, 100); // Fades as it gets larger
      let size = 60 + (i * 10);          // Gets progressively bigger
      stroke(red(baseColor), green(baseColor), blue(baseColor), alpha);
      strokeWeight(2);
      circle(this.distance, 0, size);
    }
    
    fill(baseColor);
    noStroke();
    circle(this.distance, 0, 55) //draw at current distance
    pop();
  }
}

class Glow {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 70;
    this.opacity = 255;
  }

  update() {
    this.size += 4;      // Get bigger
    this.opacity -= 10;  // Fade out
  }

  display() {
    noFill();
    stroke(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.opacity);
    strokeWeight(4);
    circle(this.x, this.y, this.size);
  }
}

class Button {
  constructor(x, y, w, h, label, color, action) {
    this.x = x,
    this.y = y,
    this.w = w,
    this.h = h,
    this.label = label;
    this.baseColor = color;
    this.action = action;
  }

  display() {
    push();
    rectMode(CENTER);
    let hovered = this.isMouseOver();
    fill(hovered ? "#FFFFFF" : this.baseColor);
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h, 8);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(hovered ? 0 : 255);
    textFont(generalFont);
    textSize(25);
    text(this.label, this.x, this.y);
    pop();
  }

    isMouseOver() {
      return (
      mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY > this.y - this.h / 2 &&
      mouseY < this.y + this.h / 2  // Fixed: Added 'mouseY <'
      );
    }
}