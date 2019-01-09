var mic;
var particles = [];
var j;
var vol;
var energyNames = ['bassEnergy','lowMidEnergy','midEnergy'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(.5,1024);
  fft.setInput(mic);

  particles.push(new Particle(windowWidth/2, windowHeight/2));
  particles.push(new Particle(windowWidth/2+100, windowHeight/2+100));
  particles.push(new Particle(windowWidth/2+200, windowHeight/2+200));
}

// function mousePressed() {
//   // for (var i = 0; i < energyNames.length; i++) {
//   //   particles.push(new Particle(mouseX + i, mouseY + i));
//   // }
//   particles.push(new Particle(windowWidth/2, windowHeight/2));
//   particles.push(new Particle(windowWidth/2+100, windowHeight/2+100));
//   particles.push(new Particle(windowWidth/2+200, windowHeight/2+200));
// }

function draw() {
  background(255);
  var spectrum = fft.analyze();

  var bassEnergy = fft.getEnergy("bass");
  var lowMidEnergy = fft.getEnergy("lowMid");
  var midEnergy = fft.getEnergy("mid");

  translate(windowWidth/2 - 100, windowHeight/2 - 100);
   for (var i = 0; i < particles.length; i++) {
     for (var j = 0; j < energyNames.length; j++) {
       particles[i].update(eval(energyNames[i]));
     }
     particles[i].show();
   }
  rotate(200);
}
