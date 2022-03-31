let x;
let y;

let cant = 25;

let f = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth;
  y = windowHeight;


  for (let i = 0; i < cant; i++) {
    f[i] = new Formas();
  }

}

function draw() {
  background(21);
  fill(31);
  rect(0, 0, x / 3, y);
  rect(x - x / 3, 0, x, y);

  for (let i = 0; i < cant; i++) {
    f[i].draw();
    f[i].funct();
  }
}
