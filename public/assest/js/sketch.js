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

/* -- 1.1 Head -- */
class Head {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let faceTemp = 0, faceY = 0;
class Face {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(3);
    stroke("#9e9e9e");
    fill(this.color);
    if (faceTemp == 0) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(this.x, 20 + faceY, this.x + 80, 20 + faceY, this.x + 80, 100 + faceY);
      bezierVertex(this.x + 80, 100 + faceY, this.x + 80, 180 + faceY, this.x, 200 + faceY);
      bezierVertex(this.x, 200 + faceY, this.x - 80, 180 + faceY, this.x - 80, 100 + faceY);
      bezierVertex(this.x - 80, 100 + faceY, this.x - 80, 20 + faceY, this.x, 20 + faceY);
      endShape();
    }
    if (faceTemp == 1) {
      beginShape();
      vertex(this.x, 40 + faceY);
      bezierVertex(this.x, 40 + faceY, this.x + 80, 40 + faceY, this.x + 70, 120 + faceY);
      bezierVertex(this.x + 70, 120 + faceY, this.x + 60, 190 + faceY, this.x, 200 + faceY);
      bezierVertex(this.x, 200 + faceY, this.x - 60, 190 + faceY, this.x - 70, 120 + faceY);
      bezierVertex(this.x - 70, 120 + faceY, this.x - 80, 40 + faceY, this.x, 40 + faceY);
      endShape();
    }
    if (faceTemp == 2) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(this.x, 20 + faceY, this.x + 110, 20 + faceY, this.x + 70, 160 + faceY);
      bezierVertex(this.x + 70, 160 + faceY, this.x + 10, 200 + faceY, this.x, 200 + faceY);
      bezierVertex(this.x, 200 + faceY, this.x - 10, 200 + faceY, this.x - 70, 160 + faceY);
      bezierVertex(this.x - 70, 160 + faceY, this.x - 110, 20 + faceY, this.x, 20 + faceY);
      endShape();
    }
    if (faceTemp == 3) {
      beginShape();
      vertex(this.x, 40 + faceY);
      bezierVertex(this.x, 40 + faceY, this.x + 100, 40 + faceY, this.x + 60, 180 + faceY);
      bezierVertex(this.x + 60, 180 + faceY, this.x, 200 + faceY, this.x, 200 + faceY);
      bezierVertex(this.x, 200 + faceY, this.x, 200 + faceY, this.x - 60, 180 + faceY);
      bezierVertex(this.x - 60, 180 + faceY, this.x - 100, 40 + faceY, this.x, 40 + faceY);
      endShape();
    }
    if (faceTemp == 4) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(this.x, 20 + faceY, this.x + 80, 20 + faceY, this.x + 80, 150 + faceY);
      bezierVertex(this.x + 80, 150 + faceY, this.x + 60, 180 + faceY, this.x, 180 + faceY);
      bezierVertex(this.x, 180 + faceY, this.x - 60, 180 + faceY, this.x - 80, 150 + faceY);
      bezierVertex(this.x - 80, 150 + faceY, this.x - 80, 20 + faceY, this.x, 20 + faceY);
      endShape();
      fill("#000");
      rect(this.x - 55, 60 + faceY, 110, 60, 20);
    }
    if (faceTemp == 5) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(this.x, 20 + faceY, this.x + 80, 20 + faceY, this.x + 80, 100 + faceY);
      bezierVertex(this.x + 80, 100 + faceY, this.x + 80, 180 + faceY, this.x + 20, 180 + faceY);
      bezierVertex(this.x + 20, 180 + faceY, this.x, 180 + faceY, this.x, 180 + faceY);
      bezierVertex(this.x, 180 + faceY, this.x, 180 + faceY, this.x - 20, 180 + faceY);
      bezierVertex(this.x - 20, 180 + faceY, this.x - 80, 180 + faceY, this.x - 80, 100 + faceY);
      bezierVertex(this.x - 80, 100 + faceY, this.x - 80, 20 + faceY, this.x, 20 + faceY);
      endShape();
      fill("#000");
      rect(this.x - 55, 60 + faceY, 110, 110, 20);
    }
    if (faceTemp == 6) {
      beginShape();
      vertex(this.x, 20 + faceY);
      bezierVertex(this.x, 20 + faceY, this.x + 60, 20 + faceY, this.x + 70, 80 + faceY);
      bezierVertex(this.x + 70, 80 + faceY, this.x + 80, 120 + faceY, this.x + 60, 160 + faceY);
      bezierVertex(this.x + 60, 160 + faceY, this.x, 180 + faceY, this.x, 180 + faceY);
      bezierVertex(this.x, 180 + faceY, this.x, 180 + faceY, this.x - 60, 160 + faceY);
      bezierVertex(this.x - 60, 160 + faceY, this.x - 80, 120 + faceY, this.x - 70, 80 + faceY);
      bezierVertex(this.x - 70, 80 + faceY, this.x - 60, 20 + faceY, this.x, 20 + faceY);
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
      vertex(this.x, 90 + faceY);
      bezierVertex(this.x, 90 + faceY, this.x + 80, 90 + faceY, this.x + 80, 170 + faceY);
      bezierVertex(this.x + 80, 170 + faceY, this.x + 80, 200 + faceY, this.x, 200 + faceY);
      bezierVertex(this.x, 200 + faceY, this.x - 80, 200 + faceY, this.x - 80, 170 + faceY);
      bezierVertex(this.x - 80, 170 + faceY, this.x - 80, 90 + faceY, this.x, 90 + faceY);
      endShape();
    }
    if (faceTemp == 9) {
      rect(this.x - 70, 100 + faceY, 140, 120, 8);
      beginShape();
      vertex(this.x + 70, 120 + faceY);
      bezierVertex(this.x + 70, 120 + faceY, this.x + 80, 130 + faceY, this.x + 80, 130 + faceY);
      bezierVertex(this.x + 80, 130 + faceY, this.x + 80, 190 + faceY, this.x + 80, 190 + faceY);
      bezierVertex(this.x + 80, 190 + faceY, this.x + 70, 200 + faceY, this.x + 70, 200 + faceY);
      endShape();

      beginShape();
      vertex(this.x - 70, 120 + faceY);
      bezierVertex(this.x - 70, 120 + faceY, this.x - 80, 130 + faceY, this.x - 80, 130 + faceY);
      bezierVertex(this.x - 80, 130 + faceY, this.x - 80, 190 + faceY, this.x - 80, 190 + faceY);
      bezierVertex(this.x - 80, 190 + faceY, this.x - 70, 200 + faceY, this.x - 70, 200 + faceY);
      endShape();
    }
    if (faceTemp == 10) {
      arc(this.x - 50, 70 + faceY, 60, 60, 0, PI + PI, OPEN);
      arc(this.x + 50, 70 + faceY, 60, 60, 0, PI + PI, OPEN);
      beginShape();
      vertex(this.x, 50 + faceY);
      bezierVertex(this.x, 50 + faceY, this.x + 100, 50 + faceY, this.x + 70, 170 + faceY);
      bezierVertex(this.x + 70, 170 + faceY, this.x + 60, 200 + faceY, this.x, 200 + faceY);
      bezierVertex(this.x, 200 + faceY, this.x - 60, 200 + faceY, this.x - 70, 170 + faceY);
      bezierVertex(this.x - 70, 170 + faceY, this.x - 100, 50 + faceY, this.x, 50 + faceY);
      endShape();
    }
    if (faceTemp == 11) {
      arc(this.x - 60, 140, 60, 60, 0, PI + PI, OPEN);
      arc(this.x + 60, 140, 60, 60, 0, PI + PI, OPEN);
      beginShape();
      vertex(this.x, 50);
      bezierVertex(this.x, 50, this.x + 100, 50, this.x + 70, 170);
      bezierVertex(this.x + 70, 170, this.x + 60, 200, this.x, 200);
      bezierVertex(this.x, 200, this.x - 60, 200, this.x - 70, 170);
      bezierVertex(this.x - 70, 170, this.x - 100, 50, this.x, 50);
      endShape();
    }
    if (faceTemp == 12) {
      ellipse(this.x, 130 + faceY, 140, 140);
    }
    if (faceTemp == 13) {
      ellipse(this.x, 120 + faceY, 140, 160);
    }
    if (faceTemp == 14) {
      ellipse(this.x, 130 + faceY, 160, 140);
    }
    if (faceTemp == 15) {
      rect(this.x - 70, 60 + faceY, 140, 140, 40);
    }
    fill('#FFF');
  }
}
let robotFace = new Face(cnvsW / 2, 400, "#FFF");


let eyeTemp = 1, eyePos = 0, eyeSize = 1, eyeDis = 0;
class Eye {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(2);
    stroke("#9e9e9e");
    fill('#FFF');
    if (eyeTemp == 1) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      // 虹彩
      strokeWeight(0);
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 20 * eyeSize, 20 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 20 * eyeSize, 20 * eyeSize);
    }
    if (eyeTemp == 2) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      // 虹彩
      strokeWeight(0);
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 13 * eyeSize, 13 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 13 * eyeSize, 13 * eyeSize);
    }
    if (eyeTemp == 3) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      strokeWeight(4);
      stroke(this.color);
      noFill();
      arc(this.x + 40 + eyeDis, this.y + 4 + eyePos, 20 * eyeSize, 20 * eyeSize, PI + 0.3, TWO_PI - 0.3);
      arc(this.x - 40 - eyeDis, this.y + 4 + eyePos, 20 * eyeSize, 20 * eyeSize, PI + 0.3, TWO_PI - 0.3);
    }
    if (eyeTemp == 4) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      strokeWeight(0);
      fill(this.color);
      rect(this.x + 40 - (10 * eyeSize) + eyeDis, this.y - 2 + eyePos, 20 * eyeSize, 4 * eyeSize, 4);
      rect(this.x - 40 - (10 * eyeSize) - eyeDis, this.y - 2 + eyePos, 20 * eyeSize, 4 * eyeSize, 4);
    }
    if (eyeTemp == 5) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 33 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 33 * eyeSize, 40 * eyeSize);
      // 虹彩
      strokeWeight(0);
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 21 * eyeSize, 24 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 21 * eyeSize, 24 * eyeSize);
    }
    if (eyeTemp == 6) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 33 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 33 * eyeSize, 40 * eyeSize);
      // 虹彩
      strokeWeight(0);
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 12 * eyeSize, 12 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 12 * eyeSize, 12 * eyeSize);
    }
    if (eyeTemp == 7) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 33 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 33 * eyeSize, 40 * eyeSize);
      strokeWeight(3);
      stroke(this.color);
      noFill();
      arc(this.x + 40 + eyeDis, this.y + 4 + eyePos, 20 * eyeSize, 20 * eyeSize, PI + 0.3, TWO_PI - 0.3);
      arc(this.x - 40 - eyeDis, this.y + 4 + eyePos, 20 * eyeSize, 20 * eyeSize, PI + 0.3, TWO_PI - 0.3);
    }
    if (eyeTemp == 8) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      strokeWeight(0);
      fill(this.color);
      rect(this.x + 40 - (10 * eyeSize) + eyeDis, this.y - 2 + eyePos, 20 * eyeSize, 4 * eyeSize, 4);
      rect(this.x - 40 - (10 * eyeSize) - eyeDis, this.y - 2 + eyePos, 20 * eyeSize, 4 * eyeSize, 4);
    }
    if (eyeTemp == 9) {
      strokeWeight(4);
      stroke(this.color);
      noFill();
      arc(this.x + 40 + eyeDis, this.y + 8 + eyePos, 40 * eyeSize, 40 * eyeSize, PI + 0.3, TWO_PI - 0.3);
      arc(this.x - 40 - eyeDis, this.y + 8 + eyePos, 40 * eyeSize, 40 * eyeSize, PI + 0.3, TWO_PI - 0.3);
    }
    if (eyeTemp == 10) {
      strokeWeight(4);
      stroke(this.color);
      noFill();
      arc(this.x + 40 + eyeDis, this.y - 8 + eyePos, 40 * eyeSize, 40 * eyeSize, 0.3, PI - 0.3);
      arc(this.x - 40 - eyeDis, this.y - 8 + eyePos, 40 * eyeSize, 40 * eyeSize, 0.3, PI - 0.3);
    }
    if (eyeTemp == 11) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 33 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 33 * eyeSize);
      // 虹彩
      strokeWeight(0);
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 24 * eyeSize, 21 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 24 * eyeSize, 21 * eyeSize);
    }
    if (eyeTemp == 12) {
      // 眼球
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 33 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 33 * eyeSize);
      // 虹彩
      strokeWeight(0);
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 12 * eyeSize, 12 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 12 * eyeSize, 12 * eyeSize);
    }
    if (eyeTemp == 13) {
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 40 * eyeSize);
    }
    if (eyeTemp == 14) {
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 32 * eyeSize, 40 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 32 * eyeSize, 40 * eyeSize);
    }
    if (eyeTemp == 15) {
      fill(this.color);
      ellipse(this.x + 40 + eyeDis, this.y + eyePos, 40 * eyeSize, 32 * eyeSize);
      ellipse(this.x - 40 - eyeDis, this.y + eyePos, 40 * eyeSize, 32 * eyeSize);
    }
    if (eyeTemp == 16) {
    }
    fill('#FFF');
    stroke("#9e9e9e");
    strokeWeight(3);
  }
}
let robotEye = new Eye(cnvsW / 2, 80, "#000000");

let mouseTemp = 1, mouseSize = 0, mousePos = 0, mouseH = 0;
class Mouse {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    fill(this.color);
    strokeWeight(2);
    stroke("#9e9e9e");
    if (mouseTemp == 1) {
      arc(this.x, this.y - 8 + mousePos, 48 + mouseSize, 48 + mouseH, 0, PI, CHORD);
    }
    if (mouseTemp == 2) {
      ellipse(this.x, this.y + mousePos, 40 + mouseSize, 40 + mouseH);
    }
    if (mouseTemp == 3) {
      rect(this.x - (40 + mouseSize) / 2, this.y + mousePos - (40 + mouseH) / 2, 40 + mouseSize, 40 + mouseH, 4);
    }
    if (mouseTemp == 4) {
      rect(this.x - (72 + mouseSize) / 2, this.y + mousePos - (32 + mouseH) / 2, 72 + mouseSize, 32 + mouseH, 4);
    }
    if (mouseTemp == 5) {
      rect(this.x - (72 + mouseSize) / 2, this.y + mousePos - (32 + mouseH) / 2, 72 + mouseSize, 32 + mouseH, 20);
    }
    if (mouseTemp == 6) {
      arc(this.x, this.y - 10 + mousePos, 40 + mouseSize, 40 + mouseH, 0.4, PI - 0.4);
    }
    if (mouseTemp == 7) {
      arc(this.x, this.y + 16 + mousePos, 40 + mouseSize, 40 + mouseH, PI + 0.4, TWO_PI - 0.4);
    }
    if (mouseTemp == 8) {
      strokeWeight(8);
      arc(this.x, this.y - 10 + mousePos, 40 + mouseSize, 40 + mouseH, 0.8, PI - 0.8);
    }
    if (mouseTemp == 9) {
      arc(this.x, this.y + 12 + mousePos, 48 + mouseSize, 48 + mouseH, PI, TWO_PI, CHORD);
    }
    strokeWeight(2);
    fill("#FFF");
  }
}
let robotMouse = new Mouse(cnvsW / 2, 160, "#FFF");

let bodyTemp = 1, bodyPos = 0, bodyH = 0, bodyW = 0;
class Body {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(3);
    stroke("#9e9e9e");
    fill(this.color);
    if (bodyTemp == 1) {
      // 上腕
      rect(this.x - 130, this.y + 40 + bodyPos, 48, 104, 16);
      rect(this.x + 82, this.y + 40 + bodyPos, 48, 104, 16);
      // 前腕
      rect(this.x - 130, this.y + 152 + bodyPos, 48, 96, 16);
      rect(this.x + 82, this.y + 152 + bodyPos, 48, 96, 16);
      // 肘
      rect(this.x - 134, this.y + 138 + bodyPos, 56, 20, 4);
      rect(this.x + 78, this.y + 138 + bodyPos, 56, 20, 4);
      // 肩
      ellipse(this.x + 80, this.y + 48 + bodyPos, 48, 48);
      ellipse(this.x - 80, this.y + 48 + bodyPos, 48, 48);
      // 下腿
      rect(this.x - 66, this.y + 272 + bodyPos, 60, 120, 16);
      rect(this.x + 8, this.y + 272 + bodyPos, 60, 120, 16);
      // 大腿
      rect(this.x - 66, this.y + 184 + bodyPos, 60, 88, 16);
      rect(this.x + 8, this.y + 184 + bodyPos, 60, 88, 16);
      // 膝
      rect(this.x - 68, this.y + 264 + bodyPos, 64, 20, 4);
      rect(this.x + 6, this.y + 264 + bodyPos, 64, 20, 4);
      // 腰
      rect(this.x - 70, this.y + 144 + bodyPos, 140, 60, 30);
      // 胴体
      rect(this.x - 80, this.y + 16 + bodyPos, 160, 176, 20, 20, 80, 80);
      // 右手
      rect(this.x - 144, this.y + 240 + bodyPos, 40, 12, 4);
      rect(this.x - 128, this.y + 240 + bodyPos, 12, 40, 4);
      rect(this.x - 112, this.y + 240 + bodyPos, 12, 40, 4);
      rect(this.x - 96, this.y + 240 + bodyPos, 12, 40, 4);
      rect(this.x - 134, this.y + 216 + bodyPos, 56, 40, 4);
      // 左手
      rect(this.x + 104, this.y + 240 + bodyPos, 40, 12, 4);
      rect(this.x + 116, this.y + 240 + bodyPos, 12, 40, 4);
      rect(this.x + 100, this.y + 240 + bodyPos, 12, 40, 4);
      rect(this.x + 84, this.y + 240 + bodyPos, 12, 40, 4);
      rect(this.x + 78, this.y + 216 + bodyPos, 56, 40, 4);
      // 首
      ellipse(this.x, this.y + 16 + bodyPos, 40, 40);
    }
    if (bodyTemp == 2) {
      // 前腕
      rect(this.x - 110, this.y + 108 + bodyPos, 36, 64, 16);
      rect(this.x + 74, this.y + 108 + bodyPos, 36, 64, 16);
      // 上腕
      rect(this.x - 110, this.y + 32 + bodyPos, 36, 80, 16);
      rect(this.x + 74, this.y + 32 + bodyPos, 36, 80, 16);
      // 肘
      rect(this.x - 112, this.y + 100 + bodyPos, 40, 16, 4);
      rect(this.x + 72, this.y + 100 + bodyPos, 40, 16, 4);
      // 右手
      rect(this.x - 112, this.y + 152 + bodyPos, 40, 32, 0, 0, 16, 16);
      // 左手
      rect(this.x + 72, this.y + 152 + bodyPos, 40, 32, 0, 0, 16, 16);

      // 肩
      ellipse(this.x + 64, this.y + 48 + bodyPos, 40, 40);
      ellipse(this.x - 64, this.y + 48 + bodyPos, 40, 40);

      // 下腿
      rect(this.x - 50, this.y + 236 + bodyPos, 44, 88, 16);
      rect(this.x + 10, this.y + 236 + bodyPos, 44, 88, 16);
      // 大腿
      rect(this.x - 50, this.y + 172 + bodyPos, 44, 64, 16);
      rect(this.x + 10, this.y + 172 + bodyPos, 44, 64, 16);
      // 膝
      rect(this.x - 52, this.y + 226 + bodyPos, 48, 20, 4);
      rect(this.x + 8, this.y + 226 + bodyPos, 48, 20, 4);

      // 腰
      rect(this.x - 56, this.y + 128 + bodyPos, 112, 56, 20, 20, 40, 40);
      // 胴体
      rect(this.x - 68, this.y + 16 + bodyPos, 136, 152, 20, 20, 80, 80);

      // 首
      ellipse(this.x, this.y + 16 + bodyPos, 40, 40);
    }
    if (bodyTemp == 3) {
      // 前腕
      rect(this.x - 126, this.y + 108 + bodyPos, 36, 72, 16);
      rect(this.x + 90, this.y + 108 + bodyPos, 36, 72, 16);
      // 上腕
      rect(this.x - 126, this.y + 32 + bodyPos, 36, 88, 16);
      rect(this.x + 90, this.y + 32 + bodyPos, 36, 88, 16);
      // 肘
      rect(this.x - 128, this.y + 108 + bodyPos, 40, 16, 4);
      rect(this.x + 88, this.y + 108 + bodyPos, 40, 16, 4);
      // 右手
      rect(this.x - 128, this.y + 160 + bodyPos, 40, 32, 0, 0, 16, 16);
      // 左手
      rect(this.x + 88, this.y + 160 + bodyPos, 40, 32, 0, 0, 16, 16);

      // 肩
      ellipse(this.x + 80, this.y + 48 + bodyPos, 48, 48);
      ellipse(this.x - 80, this.y + 48 + bodyPos, 48, 48);

      // 下腿
      rect(this.x - 56, this.y + 236 + bodyPos, 48, 104, 16);
      rect(this.x + 12, this.y + 236 + bodyPos, 48, 104, 16);
      // 大腿
      rect(this.x - 56, this.y + 172 + bodyPos, 48, 72, 16);
      rect(this.x + 12, this.y + 172 + bodyPos, 48, 72, 16);
      // 膝
      rect(this.x - 58, this.y + 234 + bodyPos, 52, 20, 4);
      rect(this.x + 10, this.y + 234 + bodyPos, 52, 20, 4);

      // 腰
      rect(this.x - 72, this.y + 128 + bodyPos, 144, 56, 20, 20, 40, 40);

      // 胴体
      rect(this.x - 84, this.y + 16 + bodyPos, 168, 152, 24, 24, 24, 24);

      // 首
      ellipse(this.x, this.y + 16 + bodyPos, 40, 40);
    }
    if (bodyTemp == 4) {
      // 上腕
      rect(this.x - 130, this.y + 40 + bodyPos, 48, 88, 16);
      rect(this.x + 82, this.y + 40 + bodyPos, 48, 88, 16);
      // 前腕
      rect(this.x - 130, this.y + 128 + bodyPos, 48, 96, 16);
      rect(this.x + 82, this.y + 128 + bodyPos, 48, 96, 16);
      // 肘
      rect(this.x - 134, this.y + 118 + bodyPos, 56, 20, 4);
      rect(this.x + 78, this.y + 118 + bodyPos, 56, 20, 4);
      // 肩
      ellipse(this.x + 80, this.y + 48 + bodyPos, 48, 48);
      ellipse(this.x - 80, this.y + 48 + bodyPos, 48, 48);
      // 下半身
      // rect(this.x - 72, this.y + 224 + bodyPos, 144, 200, 80, 80, 16, 16);
      // 下腿
      rect(this.x - 70, this.y + 272 + bodyPos, 60, 112, 16);
      rect(this.x + 12, this.y + 272 + bodyPos, 60, 112, 16);
      // 大腿
      rect(this.x - 70, this.y + 184 + bodyPos, 60, 88, 16);
      rect(this.x + 12, this.y + 184 + bodyPos, 60, 88, 16);
      // 膝
      rect(this.x - 72, this.y + 264 + bodyPos, 64, 20, 4);
      rect(this.x + 10, this.y + 264 + bodyPos, 64, 20, 4);
      // ローラー
      ellipse(this.x - 40, this.y + 176 + bodyPos, 56, 56);
      ellipse(this.x + 40, this.y + 176 + bodyPos, 56, 56);
      // 腰
      rect(this.x - 70, this.y + 128 + bodyPos, 140, 48, 24);

      // 胴体
      rect(this.x - 80, this.y + 16 + bodyPos, 160, 176, 20, 20, 80, 80);
      // 右手
      rect(this.x - 132, this.y + 200 + bodyPos, 52, 48, 8, 8, 32, 32);
      // 左手
      rect(this.x + 80, this.y + 200 + bodyPos, 52, 48, 8, 8, 32, 32);
      // 首
      ellipse(this.x, this.y + 16 + bodyPos, 40, 40);
    }
    if (bodyTemp == 5) {
      // 脚
      // ellipse(this.x, this.y + 220, 180, 120);
      rect(this.x - 80, this.y + 168 + bodyPos, 160, 104, 80, 80, 16, 16);

      // 右腕
      rect(this.x - 104, this.y + 56 + bodyPos, 40, 112, 16);
      rect(this.x - 104, this.y + 32 + bodyPos, 40, 112, 20, 8, 0, 0);
      // 左腕
      rect(this.x + 64, this.y + 56 + bodyPos, 40, 112, 16);
      rect(this.x + 64, this.y + 32 + bodyPos, 40, 112, 8, 20, 0, 0);

      //下半身
      rect(this.x - 56, this.y + 32 + bodyPos, 112, 200, 56);

      // 肩
      ellipse(this.x + 56, this.y + 48 + bodyPos, 40, 48);
      ellipse(this.x - 56, this.y + 48 + bodyPos, 40, 48);

      // 上半身
      rect(this.x - 56, this.y + 16 + bodyPos, 112, 120, 16, 16, 80, 80);

      // 首
      ellipse(this.x, this.y + 16 + bodyPos, 40, 40);
    }
  }
}
let robotBody = new Body(cnvsW / 2, 180, "#FFF");


// -- 1.3 クラスに影響する関数
// CHANGE_TEMP / テンプレートの変更
function changeTemp(parts, num) {
  if (parts == "face") {
    faceTemp = num;
    console.log(parts, faceTemp)
  }
  if (parts == "eye") {
    eyeTemp = num;
    console.log(parts, eyeTemp)
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
let cnvs; // setup()でキャンバス生成，draw()で位置調節や指定した親要素にアタッチ
function setup() {
  cnvs = createCanvas(cnvsW, cnvsH); // Creating a Canvas
  cnvs.position(0, 0);
}

// 2.2 DRAW：setup後に繰り返し実行（フレーム単位）
function draw() {
  tabSwiching();
  clear();

  cnvs.parent("canvas");

  // var newBodyH = document.getElementById("body-height").getAttribute("aria-valuenow");
  // var newBodyW = document.getElementById("body-width").getAttribute("aria-valuenow");
  // var newBodyPos = document.getElementById("body-position").getAttribute("aria-valuenow");
  // if (bodyH != newBodyH) bodyH = Number(newBodyH);
  // if (bodyW != newBodyW) bodyW = Number(newBodyW);
  // if (bodyPos != newBodyPos) bodyPos = Number(newBodyPos);
  robotBody.draw(); // 体の描写

  var facePos = document.getElementById("face-pos").getAttribute("value");
  if (facePos != faceY) faceY = Number(facePos) * -1;
  robotFace.draw(); // 顔の描画

  var newEyeSize = document.getElementById("eye-size").getAttribute("value");
  var newEyePos = document.getElementById("eye-pos").getAttribute("value");
  var newEyeDis = document.getElementById("eye-dis").getAttribute("value");
  if (eyeSize != newEyeSize) eyeSize = Number(newEyeSize) * 0.1;
  if (eyePos != newEyePos) eyePos = Number(newEyePos) * -1;
  if (eyeDis != newEyeDis) eyeDis = Number(newEyeDis);
  robotEye.draw(); // 目の描画

  var newMouseSize = document.getElementById("mouse-size").getAttribute("value");
  var newMousePos = document.getElementById("mouse-pos").getAttribute("value");
  var newMouseDis = document.getElementById("mouse-h").getAttribute("value");
  if (mouseSize != newMouseSize) mouseSize = Number(newMouseSize);
  if (mousePos != newMousePos) mousePos = Number(newMousePos) * -1;
  if (mouseH != newMouseDis) mouseH = Number(newMouseDis);
  robotMouse.draw(); // 口の描写
}


// タブの遷移
function tabSwiching() {
  let index = 1;

  const content1 = document.getElementById("content1");
  const tab1 = document.getElementById("mdc-tab-1").getAttribute("aria-selected");
  if (tab1 != "true") content1.classList.remove("active"), content1.classList.add("disable");
  if (tab1 == "true") content1.classList.remove("disable"), content1.classList.add("active"), index = 1;

  const content2 = document.getElementById("content2");
  const tab2 = document.getElementById("mdc-tab-2").getAttribute("aria-selected");
  if (tab2 != "true") content2.classList.remove("active"), content2.classList.add("disable");
  if (tab2 == "true") content2.classList.remove("disable"), content2.classList.add("active"), index = 2;

  const content3 = document.getElementById("content3");
  const tab3 = document.getElementById("mdc-tab-3").getAttribute("aria-selected");
  if (tab3 != "true") content3.classList.remove("active"), content3.classList.add("disable");
  if (tab3 == "true") content3.classList.remove("disable"), content3.classList.add("active"), index = 3;

  const content4 = document.getElementById("content4");
  const tab4 = document.getElementById("mdc-tab-4").getAttribute("aria-selected");
  if (tab4 != "true") content4.classList.remove("active"), content4.classList.add("disable");
  if (tab4 == "true") content4.classList.remove("disable"), content4.classList.add("active"), index = 4;

  const content5 = document.getElementById("content5");
  const tab5 = document.getElementById("mdc-tab-5").getAttribute("aria-selected");
  if (tab5 != "true") content5.classList.remove("active"), content5.classList.add("disable");
  if (tab5 == "true") content5.classList.remove("disable"), content5.classList.add("active"), index = 5;

  return index;
}


/*** -- 3. Original functions -- ***/
/* 
3.1 COLOR 
*/

let selectColorParts = "";
function changeColor(parts) {
  selectColorParts = parts;
}

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
}

function changeBG(wIMG) {
  var canvas = document.getElementById("canvas");
  canvas.style.backgroundImage = "url(" + wIMG + ")";
}

function saveCanvas() {
  saveCanvas(cnvs, 'result', 'jpg');
}

function saveParameters() {
  let arrayOfParameter = [faceTemp, faceY, eyeDis, eyePos, eyeSize, eyeTemp, mouseH, mousePos, mouseSize, mouseTemp, bodyH, bodyPos, bodyTemp, bodyW];
  save(arrayOfParameter, 'parameter.txt');
}