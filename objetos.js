class Formas {
  constructor() {
    this.rad = 25;
    this.agarrando = false;
    this.mover = true;

    this.posX = width / 2 + round(random(-150, 150));
    this.posY = height / 2 + round(random(-260, 260));;


    this.veloX = 3.8;
    this.veloY = 3.8;

    this.dirX = 1;
    this.dirY = 1;

    this.r = round(random(210));
    this.g = round(random(210));
    this.b = round(random(210));

    this.forma = round(random(0, 2));
    this.relleno = round(random(0, 1));
  }

  draw() {
    push();
    if (this.forma == 0) { // CIRCULOS
      push();
      ellipseMode(RADIUS);
      if (this.relleno == 0) {
        fill(this.r, this.g, this.b);
        noStroke();
      } else {
        noFill();
        stroke(this.r, this.g, this.b);
      }
      strokeWeight(3);
      ellipse(this.posX, this.posY, this.rad, this.rad);
      pop();
    }

    if (this.forma == 1) { // RECTANGULOS
      push();
      rectMode(RADIUS);
      if (this.relleno == 0) {
        fill(this.r, this.g, this.b);
        noStroke();
      } else {
        noFill();
        stroke(this.r, this.g, this.b);
        strokeWeight(3);
      }
      rect(this.posX, this.posY, this.rad, this.rad);
      pop();
    }

    if (this.forma == 2) { // RECTANGULOS
      push();
      rectMode(RADIUS);
      if (this.relleno == 0) {
        fill(this.r, this.g, this.b);
        noStroke();
      } else {
        noFill();
        stroke(this.r, this.g, this.b);
        strokeWeight(3);
      }
      triangle(this.posX, this.posY - 20, this.posX - 25, this.posY + 25, this.posX + 25, this.posY + 25);
      pop();
    }


    pop();
  }

  funct() {
    this.distan = dist(this.posX, this.posY, mouseX, mouseY);

    push();
    fill(255, 5, 5);
    pop();

    if (this.distan <= this.rad && this.mover == true) {
      if (mouseIsPressed) {
        this.posX = mouseX;
        this.posY = mouseY;
        this.agarrando = true;
      }
    }


    if (this.posX < (x / 3) - this.rad + 5 || this.posX > (x - (x / 3)) + this.rad - 5) {
      this.posX = this.posX + this.veloX * this.dirX;
      this.posY = this.posY + this.veloY * this.dirY;
    }
    if (this.posX < (x / 3) - this.rad - 35 || this.posX > (x - (x / 3)) + this.rad + 35) {
      this.mover = false;
    }

    if (this.posX >= (x / 3) - this.rad - 1 && this.posX <= (x / 3) || this.posX <= this.rad + 1) {
      this.dirX *= -1;
    }
    if (this.posX <= (x - (x / 3)) + this.rad + 1 && this.posX >= (x - (x / 3)) || this.posX >= x - this.rad - 1) {
      this.dirX *= -1;
    }


    if (this.posY >= y - this.rad - 1 || this.posY <= this.rad + 1) {
      this.dirY *= -1;
    }
  }
}
