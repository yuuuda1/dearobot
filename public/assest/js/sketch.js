/* 
1. クラスの定義 / class definition
2. p5.js functions
3. Original functions
*/

/*** -- 1. クラスの定義 / Class definition -- ***/
/* 
1.0 Foundation
  --.1 canvas
1.1 Head
1.2 Body
1.3 
*/

/* -- 1.0 Foundation -- */

// -- 1.0.1 canvas / キャンバス
// let cnvsColor = "#2196F338"; // 色
let cnvsW = window.innerWidth - 796; // 横幅(width)
let cnvsH = window.innerHeight - 208; // 縦幅(height)
const ctrX = cnvsW / 2; // 中央のX座標
const ctrY = cnvsH / 2; // 中央のY座標

// -- 1.0.2 Events / イベント
window.onload = function () {
  initParameter();
}

// -- 1.0.3 Initialization / 初期化
function initParameter() {
  sessionStorage.clear();
  if (!sessionStorage.getItem("creation_time")) {
    sessionStorage.setItem("creation_time", Date.now());
  }
}

/* -- 1.1 Head -- */
class Head {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
let faceTemp = 0,
  faceY = 0,
  faceSize = 1.0;
class Face {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(3);
    stroke("#00000060");
    fill(this.color);
    if (faceTemp == 0) {
      beginShape();
      vertex(this.x, (20 * faceSize) + faceY);
      bezierVertex(
        this.x,
        (20 * faceSize) + faceY,
        this.x + (80 * faceSize),
        (20 * faceSize) + faceY,
        this.x + (80 * faceSize),
        (100 * faceSize) + faceY
      );
      bezierVertex(
        this.x + (80 * faceSize),
        (100 * faceSize) + faceY,
        this.x + (80 * faceSize),
        (180 * faceSize) + faceY,
        this.x,
        (200 * faceSize) + faceY
      );
      bezierVertex(
        this.x,
        (200 * faceSize) + faceY,
        this.x - (80 * faceSize),
        (180 * faceSize) + faceY,
        this.x - (80 * faceSize),
        (100 * faceSize) + faceY
      );
      bezierVertex(
        this.x - (80 * faceSize),
        (100 * faceSize) + faceY,
        this.x - (80 * faceSize),
        (20 * faceSize) + faceY,
        this.x,
        (20 * faceSize) + faceY
      );
      endShape();
    }
    if (faceTemp == 1) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(
        this.x,
        20 + faceY,
        this.x + 80,
        20 + faceY,
        this.x + 80,
        100 + faceY
      );
      bezierVertex(
        this.x + 80,
        100 + faceY,
        this.x + 70,
        180 + faceY,
        this.x,
        200 + faceY
      );
      bezierVertex(
        this.x,
        200 + faceY,
        this.x - 70,
        180 + faceY,
        this.x - 80,
        100 + faceY
      );
      bezierVertex(
        this.x - 80,
        100 + faceY,
        this.x - 80,
        20 + faceY,
        this.x,
        20 + faceY
      );
      endShape();
    }
    if (faceTemp == 2) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(
        this.x,
        20 + faceY,
        this.x + 80,
        20 + faceY,
        this.x + 80,
        80 + faceY
      );
      bezierVertex(
        this.x + 80,
        80 + faceY,
        this.x + 80,
        180 + faceY,
        this.x,
        200 + faceY
      );
      bezierVertex(
        this.x,
        200 + faceY,
        this.x - 80,
        180 + faceY,
        this.x - 80,
        80 + faceY
      );
      bezierVertex(
        this.x - 80,
        80 + faceY,
        this.x - 80,
        20 + faceY,
        this.x,
        20 + faceY
      );
      endShape();
    }
    if (faceTemp == 3) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(
        this.x,
        20 + faceY,
        this.x + 100,
        20 + faceY,
        this.x + 60,
        140 + faceY
      );
      bezierVertex(
        this.x + 60,
        140 + faceY,
        this.x + 40,
        160 + faceY,
        this.x,
        180 + faceY
      );
      bezierVertex(
        this.x,
        180 + faceY,
        this.x - 40,
        160 + faceY,
        this.x - 60,
        140 + faceY
      );
      bezierVertex(
        this.x - 60,
        140 + faceY,
        this.x - 100,
        20 + faceY,
        this.x,
        20 + faceY
      );
      endShape();
    }
    if (faceTemp == 4) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(
        this.x,
        20 + faceY,
        this.x + 80,
        20 + faceY,
        this.x + 80,
        150 + faceY
      );
      bezierVertex(
        this.x + 80,
        150 + faceY,
        this.x + 60,
        180 + faceY,
        this.x,
        180 + faceY
      );
      bezierVertex(
        this.x,
        180 + faceY,
        this.x - 60,
        180 + faceY,
        this.x - 80,
        150 + faceY
      );
      bezierVertex(
        this.x - 80,
        150 + faceY,
        this.x - 80,
        20 + faceY,
        this.x,
        20 + faceY
      );
      endShape();
      fill("#000");
      rect(this.x - 55, 60 + faceY, 110, 60, 20);
    }
    if (faceTemp == 5) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(
        this.x,
        20 + faceY,
        this.x + 80,
        20 + faceY,
        this.x + 80,
        100 + faceY
      );
      bezierVertex(
        this.x + 80,
        100 + faceY,
        this.x + 80,
        180 + faceY,
        this.x + 20,
        180 + faceY
      );
      bezierVertex(
        this.x + 20,
        180 + faceY,
        this.x,
        180 + faceY,
        this.x,
        180 + faceY
      );
      bezierVertex(
        this.x,
        180 + faceY,
        this.x,
        180 + faceY,
        this.x - 20,
        180 + faceY
      );
      bezierVertex(
        this.x - 20,
        180 + faceY,
        this.x - 80,
        180 + faceY,
        this.x - 80,
        100 + faceY
      );
      bezierVertex(
        this.x - 80,
        100 + faceY,
        this.x - 80,
        20 + faceY,
        this.x,
        20 + faceY
      );
      endShape();
      fill("#000");
      rect(this.x - 55, 60 + faceY, 110, 110, 20);
    }
    if (faceTemp == 6) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(
        this.x,
        20 + faceY,
        this.x + 60,
        20 + faceY,
        this.x + 70,
        80 + faceY
      );
      bezierVertex(
        this.x + 70,
        80 + faceY,
        this.x + 80,
        120 + faceY,
        this.x + 60,
        160 + faceY
      );
      bezierVertex(
        this.x + 60,
        160 + faceY,
        this.x,
        180 + faceY,
        this.x,
        180 + faceY
      );
      bezierVertex(
        this.x,
        180 + faceY,
        this.x,
        180 + faceY,
        this.x - 60,
        160 + faceY
      );
      bezierVertex(
        this.x - 60,
        160 + faceY,
        this.x - 80,
        120 + faceY,
        this.x - 70,
        80 + faceY
      );
      bezierVertex(
        this.x - 70,
        80 + faceY,
        this.x - 60,
        20 + faceY,
        this.x,
        20 + faceY
      );
      endShape();
      fill("#000");
      rect(this.x - 60, 72 + faceY, 120, 56, 8);
    }
    if (faceTemp == 7) {
      rect(this.x - 80, 60 + faceY, 160, 120, 8);
      fill("#000");
      ellipse(this.x, 72 + faceY, 8, 8);
      rect(this.x - 72, 88 + faceY, 144, 82, 0);
    }
    if (faceTemp == 8) {
      beginShape();
      vertex(this.x, 40 + faceY);
      bezierVertex(
        this.x,
        40 + faceY,
        this.x + 80,
        40 + faceY,
        this.x + 80,
        120 + faceY
      );
      bezierVertex(
        this.x + 80,
        120 + faceY,
        this.x + 80,
        150 + faceY,
        this.x,
        150 + faceY
      );
      bezierVertex(
        this.x,
        150 + faceY,
        this.x - 80,
        150 + faceY,
        this.x - 80,
        120 + faceY
      );
      bezierVertex(
        this.x - 80,
        120 + faceY,
        this.x - 80,
        40 + faceY,
        this.x,
        40 + faceY
      );
      endShape();
    }
    if (faceTemp == 9) {
      rect(this.x - 70, 40 + faceY, 140, 120, 8);
      beginShape();
      vertex(this.x + 70, 60 + faceY);
      bezierVertex(
        this.x + 70,
        60 + faceY,
        this.x + 80,
        70 + faceY,
        this.x + 80,
        70 + faceY
      );
      bezierVertex(
        this.x + 80,
        70 + faceY,
        this.x + 80,
        130 + faceY,
        this.x + 80,
        130 + faceY
      );
      bezierVertex(
        this.x + 80,
        130 + faceY,
        this.x + 70,
        140 + faceY,
        this.x + 70,
        140 + faceY
      );
      endShape();

      beginShape();
      vertex(this.x - 70, 60 + faceY);
      bezierVertex(
        this.x - 70,
        60 + faceY,
        this.x - 80,
        70 + faceY,
        this.x - 80,
        70 + faceY
      );
      bezierVertex(
        this.x - 80,
        70 + faceY,
        this.x - 80,
        130 + faceY,
        this.x - 80,
        130 + faceY
      );
      bezierVertex(
        this.x - 80,
        130 + faceY,
        this.x - 70,
        140 + faceY,
        this.x - 70,
        140 + faceY
      );
      endShape();
    }
    if (faceTemp == 10) {
      arc(this.x - 50, 50 + faceY, 60, 60, 0, PI + PI, OPEN);
      arc(this.x + 50, 50 + faceY, 60, 60, 0, PI + PI, OPEN);
      beginShape();
      vertex(this.x, 30 + faceY);
      bezierVertex(
        this.x,
        30 + faceY,
        this.x + 100,
        30 + faceY,
        this.x + 70,
        150 + faceY
      );
      bezierVertex(
        this.x + 70,
        150 + faceY,
        this.x + 60,
        180 + faceY,
        this.x,
        180 + faceY
      );
      bezierVertex(
        this.x,
        180 + faceY,
        this.x - 60,
        180 + faceY,
        this.x - 70,
        150 + faceY
      );
      bezierVertex(
        this.x - 70,
        150 + faceY,
        this.x - 100,
        30 + faceY,
        this.x,
        30 + faceY
      );
      endShape();
    }
    if (faceTemp == 11) {
      arc(this.x - 60, 120 + faceY, 60, 60, 0, PI + PI, OPEN);
      arc(this.x + 60, 120 + faceY, 60, 60, 0, PI + PI, OPEN);
      beginShape();
      vertex(this.x, 30 + faceY);
      bezierVertex(
        this.x,
        30 + faceY,
        this.x + 100,
        30 + faceY,
        this.x + 70,
        150 + faceY
      );
      bezierVertex(
        this.x + 70,
        150 + faceY,
        this.x + 60,
        180 + faceY,
        this.x,
        180 + faceY
      );
      bezierVertex(
        this.x,
        180 + faceY,
        this.x - 60,
        180 + faceY,
        this.x - 70,
        150 + faceY
      );
      bezierVertex(
        this.x - 70,
        150 + faceY,
        this.x - 100,
        30 + faceY,
        this.x,
        30 + faceY
      );
      endShape();
    }
    if (faceTemp == 12) {
      ellipse(this.x, 100 + faceY, 140, 140);
    }
    if (faceTemp == 13) {
      ellipse(this.x, 100 + faceY, 140, 160);
    }
    if (faceTemp == 14) {
      ellipse(this.x, 100 + faceY, 160, 140);
    }
    if (faceTemp == 15) {
      rect(this.x - 70, 30 + faceY, 140, 140, 40);
    }
    fill("#FFF");
  }
}
let robotFace = new Face(cnvsW / 2, 400, "#FFF");

let eyeTemp = 0,
  eyeY = 0,
  eyeMag = 1.0,
  eyeX = 0;
class Eye {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(2);
    stroke("#00000060");
    fill("#FFF");
    if (eyeTemp == 0) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      // 虹彩
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 20 * eyeMag, 20 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 20 * eyeMag, 20 * eyeMag);
    }
    if (eyeTemp == 1) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      // 虹彩
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 13 * eyeMag, 13 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 13 * eyeMag, 13 * eyeMag);
    }
    if (eyeTemp == 2) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      strokeWeight(4);
      noFill();
      arc(
        this.x + eyeX,
        this.y + 4 + eyeY,
        20 * eyeMag,
        20 * eyeMag,
        PI + 0.3,
        TWO_PI - 0.3
      );
      arc(
        this.x - eyeX,
        this.y + 4 + eyeY,
        20 * eyeMag,
        20 * eyeMag,
        PI + 0.3,
        TWO_PI - 0.3
      );
    }
    if (eyeTemp == 3) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      strokeWeight(0);
      fill(this.color);
      rect(
        this.x - 10 * eyeMag + eyeX,
        this.y - 2 + eyeY,
        20 * eyeMag,
        4 * eyeMag,
        4
      );
      rect(
        this.x - 10 * eyeMag - eyeX,
        this.y - 2 + eyeY,
        20 * eyeMag,
        4 * eyeMag,
        4
      );
    }
    if (eyeTemp == 4) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 33 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 33 * eyeMag, 40 * eyeMag);
      // 虹彩
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 21 * eyeMag, 24 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 21 * eyeMag, 24 * eyeMag);
    }
    if (eyeTemp == 5) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 33 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 33 * eyeMag, 40 * eyeMag);
      // 虹彩
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 12 * eyeMag, 12 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 12 * eyeMag, 12 * eyeMag);
    }
    if (eyeTemp == 6) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 33 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 33 * eyeMag, 40 * eyeMag);
      strokeWeight(3);
      noFill();
      arc(
        this.x + eyeX,
        this.y + 4 + eyeY,
        20 * eyeMag,
        20 * eyeMag,
        PI + 0.3,
        TWO_PI - 0.3
      );
      arc(
        this.x - eyeX,
        this.y + 4 + eyeY,
        20 * eyeMag,
        20 * eyeMag,
        PI + 0.3,
        TWO_PI - 0.3
      );
    }
    if (eyeTemp == 7) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      strokeWeight(0);
      fill(this.color);
      rect(
        this.x - 10 * eyeMag + eyeX,
        this.y - 2 + eyeY,
        20 * eyeMag,
        4 * eyeMag,
        4
      );
      rect(
        this.x - 10 * eyeMag - eyeX,
        this.y - 2 + eyeY,
        20 * eyeMag,
        4 * eyeMag,
        4
      );
    }
    if (eyeTemp == 8) {
      strokeWeight(4);
      noFill();
      arc(
        this.x + eyeX,
        this.y + 8 + eyeY,
        40 * eyeMag,
        40 * eyeMag,
        PI + 0.3,
        TWO_PI - 0.3
      );
      arc(
        this.x - eyeX,
        this.y + 8 + eyeY,
        40 * eyeMag,
        40 * eyeMag,
        PI + 0.3,
        TWO_PI - 0.3
      );
    }
    if (eyeTemp == 9) {
      strokeWeight(4);
      noFill();
      arc(
        this.x + 40 + eyeX,
        this.y - 8 + eyeY,
        40 * eyeMag,
        40 * eyeMag,
        0.3,
        PI - 0.3
      );
      arc(
        this.x - 40 - eyeX,
        this.y - 8 + eyeY,
        40 * eyeMag,
        40 * eyeMag,
        0.3,
        PI - 0.3
      );
    }
    if (eyeTemp == 10) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 33 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 33 * eyeMag);
      // 虹彩
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 24 * eyeMag, 21 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 24 * eyeMag, 21 * eyeMag);
    }
    if (eyeTemp == 11) {
      // 眼球
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 33 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 33 * eyeMag);
      // 虹彩
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 12 * eyeMag, 12 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 12 * eyeMag, 12 * eyeMag);
    }
    if (eyeTemp == 12) {
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 40 * eyeMag);
    }
    if (eyeTemp == 13) {
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 32 * eyeMag, 40 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 32 * eyeMag, 40 * eyeMag);
    }
    if (eyeTemp == 14) {
      fill(this.color);
      ellipse(this.x + eyeX, this.y + eyeY, 40 * eyeMag, 32 * eyeMag);
      ellipse(this.x - eyeX, this.y + eyeY, 40 * eyeMag, 32 * eyeMag);
    }
    if (eyeTemp == 15) {
    }
    fill("#FFF");
    stroke("#00000060");
    strokeWeight(3);
  }
}
let robotEye = new Eye(cnvsW / 2, 80, "#000000");

let mouseTemp = 0,
  mouseWidth = 0,
  mouseY = 0,
  mouseHeight = 0;
class Mouse {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    fill(this.color);
    stroke("#00000060");
    if (mouseTemp == 0) {
      arc(
        this.x,
        this.y - 8 + mouseY,
        48 + mouseWidth,
        48 + mouseHeight,
        0,
        PI,
        CHORD
      );
    }
    if (mouseTemp == 1) {
      ellipse(this.x, this.y + mouseY, 40 + mouseWidth, 40 + mouseHeight);
    }
    if (mouseTemp == 2) {
      rect(
        this.x - (40 + mouseWidth) / 2,
        this.y + mouseY - (40 + mouseHeight) / 2,
        40 + mouseWidth,
        40 + mouseHeight,
        4
      );
    }
    if (mouseTemp == 3) {
      rect(
        this.x - (72 + mouseWidth) / 2,
        this.y + mouseY - (32 + mouseHeight) / 2,
        72 + mouseWidth,
        32 + mouseHeight,
        4
      );
    }
    if (mouseTemp == 4) {
      rect(
        this.x - (72 + mouseWidth) / 2,
        this.y + mouseY - (32 + mouseHeight) / 2,
        72 + mouseWidth,
        32 + mouseHeight,
        20
      );
    }
    if (mouseTemp == 5) {
      arc(
        this.x,
        this.y - 10 + mouseY,
        40 + mouseWidth,
        40 + mouseHeight,
        0.4,
        PI - 0.4
      );
    }
    if (mouseTemp == 6) {
      arc(
        this.x,
        this.y + 16 + mouseY,
        40 + mouseWidth,
        40 + mouseHeight,
        PI + 0.4,
        TWO_PI - 0.4
      );
    }
    if (mouseTemp == 7) {
      strokeWeight(8);
      arc(
        this.x,
        this.y - 10 + mouseY,
        40 + mouseWidth,
        40 + mouseHeight,
        0.8,
        PI - 0.8
      );
    }
    if (mouseTemp == 8) {
      arc(
        this.x,
        this.y + 12 + mouseY,
        48 + mouseWidth,
        48 + mouseHeight,
        PI,
        TWO_PI,
        CHORD
      );
    }
    fill("#FFF");
  }
}
let robotMouse = new Mouse(cnvsW / 2, 160, "#FFF");

let bodyTemp = 0,
  bodyY = 0,
  bodyHeight = 0,
  bodyWidth = 0;
class Body {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(3);
    stroke("#00000060");
    fill(this.color);
    if (bodyTemp == 0) {
      // 上腕
      rect(this.x - 130, this.y + 40 + bodyY, 48, 104, 16);
      rect(this.x + 82, this.y + 40 + bodyY, 48, 104, 16);
      // 前腕
      rect(this.x - 130, this.y + 152 + bodyY, 48, 96, 16);
      rect(this.x + 82, this.y + 152 + bodyY, 48, 96, 16);
      // 肘
      rect(this.x - 134, this.y + 138 + bodyY, 56, 20, 4);
      rect(this.x + 78, this.y + 138 + bodyY, 56, 20, 4);
      // 肩
      ellipse(this.x + 80, this.y + 48 + bodyY, 48, 48);
      ellipse(this.x - 80, this.y + 48 + bodyY, 48, 48);
      // 下腿
      rect(this.x - 66, this.y + 272 + bodyY, 60, 120, 16);
      rect(this.x + 8, this.y + 272 + bodyY, 60, 120, 16);
      // 大腿
      rect(this.x - 66, this.y + 184 + bodyY, 60, 88, 16);
      rect(this.x + 8, this.y + 184 + bodyY, 60, 88, 16);
      // 膝
      rect(this.x - 68, this.y + 264 + bodyY, 64, 20, 4);
      rect(this.x + 6, this.y + 264 + bodyY, 64, 20, 4);
      // 腰
      rect(this.x - 70, this.y + 144 + bodyY, 140, 60, 30);
      // 胴体
      rect(this.x - 80, this.y + 16 + bodyY, 160, 176, 20, 20, 80, 80);
      // 右手
      rect(this.x - 144, this.y + 240 + bodyY, 40, 12, 4);
      rect(this.x - 128, this.y + 240 + bodyY, 12, 40, 4);
      rect(this.x - 112, this.y + 240 + bodyY, 12, 40, 4);
      rect(this.x - 96, this.y + 240 + bodyY, 12, 40, 4);
      rect(this.x - 134, this.y + 216 + bodyY, 56, 40, 4);
      // 左手
      rect(this.x + 104, this.y + 240 + bodyY, 40, 12, 4);
      rect(this.x + 116, this.y + 240 + bodyY, 12, 40, 4);
      rect(this.x + 100, this.y + 240 + bodyY, 12, 40, 4);
      rect(this.x + 84, this.y + 240 + bodyY, 12, 40, 4);
      rect(this.x + 78, this.y + 216 + bodyY, 56, 40, 4);
      // 首
      ellipse(this.x, this.y + 16 + bodyY, 40, 40);
    }
    if (bodyTemp == 1) {
      // 前腕
      rect(this.x - 110, this.y + 108 + bodyY, 36, 64, 16);
      rect(this.x + 74, this.y + 108 + bodyY, 36, 64, 16);
      // 上腕
      rect(this.x - 110, this.y + 32 + bodyY, 36, 80, 16);
      rect(this.x + 74, this.y + 32 + bodyY, 36, 80, 16);
      // 肘
      rect(this.x - 112, this.y + 100 + bodyY, 40, 16, 4);
      rect(this.x + 72, this.y + 100 + bodyY, 40, 16, 4);
      // 右手
      rect(this.x - 112, this.y + 152 + bodyY, 40, 32, 0, 0, 16, 16);
      // 左手
      rect(this.x + 72, this.y + 152 + bodyY, 40, 32, 0, 0, 16, 16);

      // 肩
      ellipse(this.x + 64, this.y + 48 + bodyY, 40, 40);
      ellipse(this.x - 64, this.y + 48 + bodyY, 40, 40);

      // 下腿
      rect(this.x - 50, this.y + 236 + bodyY, 44, 88, 16);
      rect(this.x + 10, this.y + 236 + bodyY, 44, 88, 16);
      // 大腿
      rect(this.x - 50, this.y + 172 + bodyY, 44, 64, 16);
      rect(this.x + 10, this.y + 172 + bodyY, 44, 64, 16);
      // 膝
      rect(this.x - 52, this.y + 226 + bodyY, 48, 20, 4);
      rect(this.x + 8, this.y + 226 + bodyY, 48, 20, 4);

      // 腰
      rect(this.x - 56, this.y + 128 + bodyY, 112, 56, 20, 20, 40, 40);
      // 胴体
      rect(this.x - 68, this.y + 16 + bodyY, 136, 152, 20, 20, 80, 80);

      // 首
      ellipse(this.x, this.y + 16 + bodyY, 40, 40);
    }
    if (bodyTemp == 2) {
      // 前腕
      rect(this.x - 126, this.y + 108 + bodyY, 36, 72, 16);
      rect(this.x + 90, this.y + 108 + bodyY, 36, 72, 16);
      // 上腕
      rect(this.x - 126, this.y + 32 + bodyY, 36, 88, 16);
      rect(this.x + 90, this.y + 32 + bodyY, 36, 88, 16);
      // 肘
      rect(this.x - 128, this.y + 108 + bodyY, 40, 16, 4);
      rect(this.x + 88, this.y + 108 + bodyY, 40, 16, 4);
      // 右手
      rect(this.x - 128, this.y + 160 + bodyY, 40, 32, 0, 0, 16, 16);
      // 左手
      rect(this.x + 88, this.y + 160 + bodyY, 40, 32, 0, 0, 16, 16);

      // 肩
      ellipse(this.x + 80, this.y + 48 + bodyY, 48, 48);
      ellipse(this.x - 80, this.y + 48 + bodyY, 48, 48);

      // 下腿
      rect(this.x - 56, this.y + 236 + bodyY, 48, 104, 16);
      rect(this.x + 12, this.y + 236 + bodyY, 48, 104, 16);
      // 大腿
      rect(this.x - 56, this.y + 172 + bodyY, 48, 72, 16);
      rect(this.x + 12, this.y + 172 + bodyY, 48, 72, 16);
      // 膝
      rect(this.x - 58, this.y + 234 + bodyY, 52, 20, 4);
      rect(this.x + 10, this.y + 234 + bodyY, 52, 20, 4);

      // 腰
      rect(this.x - 72, this.y + 128 + bodyY, 144, 56, 20, 20, 40, 40);

      // 胴体
      rect(this.x - 84, this.y + 16 + bodyY, 168, 152, 24, 24, 24, 24);

      // 首
      ellipse(this.x, this.y + 16 + bodyY, 40, 40);
    }
    if (bodyTemp == 3) {
      // 上腕
      rect(this.x - 130, this.y + 40 + bodyY, 48, 88, 16);
      rect(this.x + 82, this.y + 40 + bodyY, 48, 88, 16);
      // 前腕
      rect(this.x - 130, this.y + 128 + bodyY, 48, 96, 16);
      rect(this.x + 82, this.y + 128 + bodyY, 48, 96, 16);
      // 肘
      rect(this.x - 134, this.y + 118 + bodyY, 56, 20, 4);
      rect(this.x + 78, this.y + 118 + bodyY, 56, 20, 4);
      // 肩
      ellipse(this.x + 80, this.y + 48 + bodyY, 48, 48);
      ellipse(this.x - 80, this.y + 48 + bodyY, 48, 48);
      // 下半身
      // rect(this.x - 72, this.y + 224 + bodyY, 144, 200, 80, 80, 16, 16);
      // 下腿
      rect(this.x - 70, this.y + 272 + bodyY, 60, 112, 16);
      rect(this.x + 12, this.y + 272 + bodyY, 60, 112, 16);
      // 大腿
      rect(this.x - 70, this.y + 184 + bodyY, 60, 88, 16);
      rect(this.x + 12, this.y + 184 + bodyY, 60, 88, 16);
      // 膝
      rect(this.x - 72, this.y + 264 + bodyY, 64, 20, 4);
      rect(this.x + 10, this.y + 264 + bodyY, 64, 20, 4);
      // ローラー
      ellipse(this.x - 40, this.y + 176 + bodyY, 56, 56);
      ellipse(this.x + 40, this.y + 176 + bodyY, 56, 56);
      // 腰
      rect(this.x - 70, this.y + 128 + bodyY, 140, 48, 24);

      // 胴体
      rect(this.x - 80, this.y + 16 + bodyY, 160, 176, 20, 20, 80, 80);
      // 右手
      rect(this.x - 132, this.y + 200 + bodyY, 52, 48, 8, 8, 32, 32);
      // 左手
      rect(this.x + 80, this.y + 200 + bodyY, 52, 48, 8, 8, 32, 32);
      // 首
      ellipse(this.x, this.y + 16 + bodyY, 40, 40);
    }
    if (bodyTemp == 4) {
      // 脚
      // ellipse(this.x, this.y + 220, 180, 120);
      rect(this.x - 80, this.y + 168 + bodyY, 160, 104, 80, 80, 16, 16);

      // 右腕
      rect(this.x - 104, this.y + 56 + bodyY, 40, 112, 16);
      rect(this.x - 104, this.y + 32 + bodyY, 40, 112, 20, 8, 0, 0);
      // 左腕
      rect(this.x + 64, this.y + 56 + bodyY, 40, 112, 16);
      rect(this.x + 64, this.y + 32 + bodyY, 40, 112, 8, 20, 0, 0);

      //下半身
      rect(this.x - 56, this.y + 32 + bodyY, 112, 200, 56);

      // 肩
      ellipse(this.x + 56, this.y + 48 + bodyY, 40, 48);
      ellipse(this.x - 56, this.y + 48 + bodyY, 40, 48);

      // 上半身
      rect(this.x - 56, this.y + 16 + bodyY, 112, 120, 16, 16, 80, 80);

      // 首
      ellipse(this.x, this.y + 16 + bodyY, 40, 40);
    }
  }
}
let robotBody = new Body(cnvsW / 2, 180, "#FFF");



// -- 1.3 クラスに影響する関数
// CHANGE_TEMP / テンプレートの変更
function changeTemp(parts, num) {
  if (parts == "face") {
    faceTemp = num;
    console.log(parts, faceTemp);
  }
  if (parts == "eye") {
    eyeTemp = num;
    console.log(parts, eyeTemp);
  }
  if (parts == "mouse") {
    mouseTemp = num;
    console.log(parts, mouseTemp);
  }
  if (parts == "body") {
    bodyTemp = num;
    console.log(parts, bodyTemp);
  }
}

/*** -- 2. function of p5.js -- ***/
/* 
2.1 SETUP() 
2.2 DRAW()
*/

// 2.1 SETUP: キャンバスの初期化
let cnvs; // setup()でキャンバス生成，draw()で位置調節や指定した親要素にアタッチ
function setup() {
  cnvs = createCanvas(cnvsW, cnvsH); // Creating a Canvas
  cnvs.position(0, 0);
}

// 2.2 DRAW：setup後に繰り返し実行（フレーム単位）
function draw() {
  tabSwiching();
  clear();

  cnvs.parent("canvas");


  robotBody.draw(); // 体の描写

  var facePos = document.getElementById("face-pos").getAttribute("value");
  if (facePos != faceY) faceY = Number(facePos);

  robotFace.draw(); // 顔の描画

  var newEyeSize = document.getElementById("eye-size").getAttribute("value");
  var newEyePos = document.getElementById("eye-pos").getAttribute("value");
  var newEyeDis = document.getElementById("eye-dis").getAttribute("value");
  if (eyeMag != newEyeSize) eyeMag = Number(newEyeSize);
  if (eyeY != newEyePos) eyeY = Number(newEyePos);
  if (eyeX != newEyeDis) eyeX = Number(newEyeDis);
  robotEye.draw(); // 目の描画

  var newMouseSize = document
    .getElementById("mouse-size")
    .getAttribute("value");
  var newMousePos = document.getElementById("mouse-pos").getAttribute("value");
  var newMouseDis = document.getElementById("mouse-h").getAttribute("value");
  if (mouseWidth != newMouseSize) mouseWidth = Number(newMouseSize);
  if (mouseY != newMousePos) mouseY = Number(newMousePos);
  if (mouseHeight != newMouseDis) mouseHeight = Number(newMouseDis);
  robotMouse.draw(); // 口の描写

  // アンケートに全て回答していた場合、送信ボタンをActive
  len = getRadioButtonValue().length;
  if (sessionStorage.getItem("adjective_pairs")) {
    sessionStorage.removeItem("adjective_pairs");
    sessionStorage.setItem("adjective_pairs", getRadioButtonValue());
  } else {
    sessionStorage.setItem("adjective_pairs", getRadioButtonValue());
  }
  activeSendButton(checkAllEnquete(len));

  // ループ毎に各値をSessionStorageに保存
  saveToStorage();

  let elm = document.getElementsByName("consent-radio");
  let elmLen = elm.length;
  for (let i = 0; i < elmLen; i++) {
    if (elm.item(i).checked) {
      if (elm.item(i).value == "agree") {
        localStorage.setItem("consent-form", "agree");
        const ft = document.getElementById("floating-table");
        ft.classList.add("disable");
      }
      if (elm.item(i).value == "disagree") {
        window.location.href = '404.html';
      }
    }
  }
}

// タブの遷移
function tabSwiching() {
  let index = 1;

  const content1 = document.getElementById("content1");
  const tab1 = document
    .getElementById("mdc-tab-1")
    .getAttribute("aria-selected");
  if (tab1 != "true")
    content1.classList.remove("active"), content1.classList.add("disable");
  if (tab1 == "true")
    content1.classList.remove("disable"),
      content1.classList.add("active"),
      (index = 1);

  const content2 = document.getElementById("content2");
  const tab2 = document
    .getElementById("mdc-tab-2")
    .getAttribute("aria-selected");
  if (tab2 != "true")
    content2.classList.remove("active"), content2.classList.add("disable");
  if (tab2 == "true")
    content2.classList.remove("disable"),
      content2.classList.add("active"),
      (index = 2);

  const content3 = document.getElementById("content3");
  const tab3 = document
    .getElementById("mdc-tab-3")
    .getAttribute("aria-selected");
  if (tab3 != "true")
    content3.classList.remove("active"), content3.classList.add("disable");
  if (tab3 == "true")
    content3.classList.remove("disable"),
      content3.classList.add("active"),
      (index = 3);

  const content4 = document.getElementById("content4");
  const tab4 = document
    .getElementById("mdc-tab-4")
    .getAttribute("aria-selected");
  if (tab4 != "true")
    content4.classList.remove("active"), content4.classList.add("disable");
  if (tab4 == "true")
    content4.classList.remove("disable"),
      content4.classList.add("active"),
      (index = 4);

  const content5 = document.getElementById("content5");
  const tab5 = document
    .getElementById("mdc-tab-5")
    .getAttribute("aria-selected");
  if (tab5 != "true")
    content5.classList.remove("active"), content5.classList.add("disable");
  if (tab5 == "true")
    content5.classList.remove("disable"),
      content5.classList.add("active"),
      (index = 5);

  const content6 = document.getElementById("content6");
  const tab6 = document
    .getElementById("mdc-tab-6")
    .getAttribute("aria-selected");
  if (tab6 != "true")
    content6.classList.remove("active"), content6.classList.add("disable");
  if (tab6 == "true")
    content6.classList.remove("disable"),
      content6.classList.add("active"),
      (index = 6);

  return index;
}

/*** -- 3. Original functions -- ***/
/* 
3.1 COLOR 
*/

// 色を変更するパーツを変数代入
let selectColorParts = "";
function changeColor(parts) {
  selectColorParts = parts;
}

// ColorPalletががクリックされた場合（onClick()）
function onPalletClick(colorValue) {
  if (selectColorParts == "face") {
    robotFace.color = colorValue;
  }
  if (selectColorParts == "eye") {
    robotEye.color = colorValue;
  }
  if (selectColorParts == "mouse") {
    robotMouse.color = colorValue;
  }
  if (selectColorParts == "body") {
    robotBody.color = colorValue;
  }
  chageColorPicker(colorValue);
}

// ColorPalletで選択された色をColorPickerに反映
function chageColorPicker(color) {
  let elm = document.getElementById('colorPicker');
  elm.value = color;
}

// ColorPickerで値が変更された場合（onChange()）
function getColorPicker() {
  let elm = document.getElementById('colorPicker');
  let colorValue = elm.value;
  if (selectColorParts == "face") {
    robotFace.color = colorValue;
  }
  if (selectColorParts == "eye") {
    robotEye.color = colorValue;
  }
  if (selectColorParts == "mouse") {
    robotMouse.color = colorValue;
  }
  if (selectColorParts == "body") {
    robotBody.color = colorValue;
  }
}

let bgStatus = "";
function changeBG(wIMG) {
  var canvas = document.getElementById("canvas");
  canvas.style.backgroundImage = "url(" + wIMG + ")";
  bgStatus = wIMG;
}

function saveImage() {
  saveCanvas(cnvs, "result", "png");
}

function saveParameters() {
  // console.log(getRadioButtonValue());

  let arrayOfParameter = [
    faceTemp,
    faceY,
    eyeX,
    eyeY,
    eyeMag,
    eyeTemp,
    mouseHeight,
    mouseY,
    mouseWidth,
    mouseTemp,
    bodyHeight,
    bodyY,
    bodyTemp,
    bodyWidth,
  ];
  save(arrayOfParameter, "parameter.txt");
}

// ラジオボタンから値を取得する関数
function getRadioButtonValue() {
  let elm = document.getElementsByName("adjective-radio");
  let len = elm.length;
  let checkValue = new Array();
  for (let i = 0; i < len; i++) {
    if (elm.item(i).checked) {
      checkValue.push(elm.item(i).value);
    }
  }
  return checkValue;
}

// ラジオボタンが全ての入力されているかを判定する関数
function checkAllEnquete(len) {
  if (len == 28) {
    return true;
  }
  return false;
}

// let sendButtonFlag = 0;
function activeSendButton(boolean) {
  if (boolean) {
    document.getElementById("send-button").removeAttribute("disabled");
    // console.log(addData());
    // sendButtonFlag = 1;
  }
}

window.addEventListener(
  "load",
  function () {
    if (!localStorage.getItem("disp_popup")) {
      localStorage.setItem("disp_popup", "on");
      var popup = document.getElementsByClassName("bg_onetime_popup");
      popup[0].classList.add("js_active");
      popup[0].onclick = function () {
        popup[0].classList.remove("js_active");
      };
    }
  },
  false
);

// sessionStorageにパラメータ保存
function saveToStorage() {
  // Face：顔
  sessionStorage.setItem("faceTemp", faceTemp);
  sessionStorage.setItem("faceColor", robotFace.color);
  sessionStorage.setItem("faceY", faceY);
  sessionStorage.setItem("faceSize", faceSize);
  // Eye：目
  sessionStorage.setItem("eyeTemp", eyeTemp);
  sessionStorage.setItem("eyeColor", robotEye.color);
  sessionStorage.setItem("eyeY", eyeY);
  sessionStorage.setItem("eyeX", eyeX);
  sessionStorage.setItem("eyeMag", eyeMag);
  // Mouse：口
  sessionStorage.setItem("mouseTemp", mouseTemp);
  sessionStorage.setItem("mouseColor", robotMouse.color);
  sessionStorage.setItem("mouseY", mouseY);
  sessionStorage.setItem("mouseHeight", mouseHeight);
  sessionStorage.setItem("mouseWidth", mouseWidth);
  // Body：体
  sessionStorage.setItem("bodyTemp", bodyTemp);
  sessionStorage.setItem("bodyColor", robotBody.color);
  sessionStorage.setItem("bodyY", bodyY);
  sessionStorage.setItem("bodyHeight", bodyHeight);
  sessionStorage.setItem("bodyWidth", bodyWidth);
}