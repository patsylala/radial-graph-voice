
var angle = 1;
var speed = .08;

function Particle(x, y) {
  console.log(x,y);
  this.x = x;
  this.y = y;
  this.history = [];
  this.j = 0;

  this.update = function(energy) {
    this.j = map(energy, 0, 255, 100, 200);
    this.x = 100 + sin(angle) * this.j;
    this.y = 100 + cos(angle) * this.j;

    angle += speed;

    // if (this.x < 0) {
    //   this.x++;
    // }
    // else if (this.x > windowWidth) {
    //   this.x--;
    // }
    //
    // if (this.y < 0 ) {
    //   this.y++;
    // }
    // else if (this.y > windowHeight) {
    //   this.y--;
    // }

    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-.3, .3);
      this.history[i].y += random(-.3, .3);
    }

    var v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 1480) {
      this.history.splice(0, 1);
    }
  }

  this.show = function() {
    stroke(0);

    noFill();
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      vertex(pos.x, pos.y);
    }
    endShape();
  }

}
