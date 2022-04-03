class Formas {
  constructor() {
    this.rad = 30;
    this.agarrando = false;
    this.mover = true;

    this.vibrarEn = round(random(900, 1200));
    this.vibrando = false;
    this.vibrar = 0;
    this.vibracionTime = 2;


    this.posX = width / 2 + round(random(-150, 150));
    this.posY = height / 2 + round(random(-260, 260));

    this.veloX = 3.8;
    this.veloY = 3.8;

    this.dirX = 1;
    this.dirY = 1;

    this.r = round(random(210));
    this.g = round(random(210));
    this.b = round(random(210));
    this.colores = [color(226, 44, 33), color(233, 139, 37), color(207, 203, 86), color(61, 206, 82), color(33, 190, 235), color(58, 53, 168), color(148, 33, 235), color(223, 67, 104)];

    this.colorForma = this.colores[round(random(0, 7))];

    this.forma = round(random(0, 2));
    this.relleno = round(random(0, 1));
  }

  draw() {
    angleMode(DEGREES);
    push();
    if (this.forma == 0) { // CIRCULOS
      push();
      ellipseMode(RADIUS);
      if (this.relleno == 0) {
        fill(this.colorForma);
        noStroke();
      } else {
        noFill();
        stroke(this.colorForma);
      }
      strokeWeight(3);
      translate(this.posX, this.posY);
      rotate(this.vibrar);
      ellipse(0, 0, this.rad, this.rad);
      pop();
    }

    if (this.forma == 1) { // RECTANGULOS
      push();
      rectMode(RADIUS);
      if (this.relleno == 0) {
        fill(this.colorForma);
        noStroke();
      } else {
        noFill();
        stroke(this.colorForma);
        strokeWeight(3);
      }
      translate(this.posX, this.posY);
      rotate(this.vibrar);
      rect(0, 0, this.rad, this.rad);
      pop();
    }

    if (this.forma == 2) { // TRIANGULOS
      push();
      rectMode(RADIUS);
      if (this.relleno == 0) {
        fill(this.colorForma);
        noStroke();
      } else {
        noFill();
        stroke(this.colorForma);
        strokeWeight(3);
      }
      translate(this.posX, this.posY);
      rotate(this.vibrar);
      triangle(0, 0 - 25, 0 - 30, 0 + 30, 0 + 30, 0 + 30);
      pop();
    }
    pop();
  }

  funct() {
    this.distan = dist(this.posX, this.posY, mouseX, mouseY);

    push();
    fill(255, 5, 5);
    pop();

    // DRAG

    if (this.distan <= this.rad && this.mover == true) {
      if (mouseIsPressed) {
        this.posX = mouseX;
        this.posY = mouseY;
        this.vibrarEn = round(random(900, 1200));
        this.vibrando = false;
        this.vibrar = 0;
      }
    }

    // REBOTES

    if (this.posX < (x / 3) - this.rad + 5 || this.posX > (x - (x / 3)) + this.rad - 5) {
      this.posX = this.posX + this.veloX * this.dirX;
      this.posY = this.posY + this.veloY * this.dirY;
      this.vibrarEn = 999;
      this.vibrando = false;
      this.vibrar = 0;
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

    // vibrar

    this.vibrarEn = this.vibrarEn - 1;
    if (this.vibrarEn <= 0) {
      this.vibrarEn = 0;
      this.vibrando = true;
    }


    this.vibracionTime++;
    if (this.vibrando == true) {
      if (this.vibracionTime >= 7) {
        this.vibrar = random(-8, 8);
        this.posX = this.posX + random(-0.5, 0.5);
        this.PosY = this.posY + random(-0.5, 0.5);
        this.vibracionTime = 0;
      }
    }

  }
}
