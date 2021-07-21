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

// 2.1 SETUP: キャンバスの初期化
let cnvs; // setup()でキャンバス生成，draw()で位置調節や指定した親要素にアタッチ
let secnv;
function setup() {
  cnvs = createCanvas(cnvsW, cnvsH); // Creating a Canvas
  secnv = createGraphics(cnvsW, cnvsH); // Creating a Canvas
  cnvs.position(0, 0);
  // secnv.position(0, 0);
}

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

let faceTemp = 1, faceY = 0, faceSize = 1, displayFlag = 0;
class Face {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(2.5);
    stroke("#b0bec5");
    fill(this.color);
    if (faceTemp == 1) {
      beginShape();
      vertex(this.x, 9 * faceSize + faceY);
      bezierVertex(this.x, 9 * faceSize + faceY, this.x + 60 * faceSize, 9 * faceSize + faceY, this.x + 65 * faceSize, 54 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 54 * faceSize + faceY, this.x + 75 * faceSize, 90 * faceSize + faceY, this.x + 60 * faceSize, 135 * faceSize + faceY);
      bezierVertex(this.x + 60 * faceSize, 135 * faceSize + faceY, this.x + 40 * faceSize, 184.5 * faceSize + faceY, this.x, 180 * faceSize + faceY);
      bezierVertex(this.x, 180 * faceSize + faceY, this.x - 40 * faceSize, 184.5 * faceSize + faceY, this.x - 60 * faceSize, 135 * faceSize + faceY);
      bezierVertex(this.x - 60 * faceSize, 135 * faceSize + faceY, this.x - 75 * faceSize, 90 * faceSize + faceY, this.x - 65 * faceSize, 54 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 54 * faceSize + faceY, this.x - 60 * faceSize, 9 * faceSize + faceY, this.x, 9 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        fill("#2e2e2e");
        strokeWeight(1);
        beginShape();
        vertex(this.x, 18 * faceSize + faceY);
        bezierVertex(this.x, 18 * faceSize + faceY, this.x + 50 * faceSize, 18 * faceSize + faceY, this.x + 55 * faceSize, 63 * faceSize + faceY);
        bezierVertex(this.x + 55 * faceSize, 63 * faceSize + faceY, this.x + 65 * faceSize, 99 * faceSize + faceY, this.x + 50 * faceSize, 126 * faceSize + faceY);
        bezierVertex(this.x + 50 * faceSize, 126 * faceSize + faceY, this.x + 30 * faceSize, 179.1 * faceSize + faceY, this.x, 171 * faceSize + faceY);
        bezierVertex(this.x, 171 * faceSize + faceY, this.x - 30 * faceSize, 179.1 * faceSize, this.x - 50 * faceSize, 126 * faceSize + faceY);
        bezierVertex(this.x - 50 * faceSize, 126 * faceSize + faceY, this.x - 65 * faceSize, 99 * faceSize + faceY, this.x - 55 * faceSize, 63 * faceSize + faceY);
        bezierVertex(this.x - 55 * faceSize, 63 * faceSize + faceY, this.x - 50 * faceSize, 18 * faceSize + faceY, this.x, 18 * faceSize + faceY);
        endShape();
      }

    }
    if (faceTemp == 2) {
      beginShape();
      vertex(this.x, 9 * faceSize + faceY);
      bezierVertex(this.x, 9 * faceSize + faceY, this.x + 50 * faceSize, 9 * faceSize + faceY, this.x + 65 * faceSize, 54 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 54 * faceSize + faceY, this.x + 75 * faceSize, 99 * faceSize + faceY, this.x + 55 * faceSize, 144 * faceSize + faceY);
      bezierVertex(this.x + 55 * faceSize, 144 * faceSize + faceY, this.x + 35 * faceSize, 171 * faceSize + faceY, this.x, 180 * faceSize + faceY);
      bezierVertex(this.x, 180 * faceSize + faceY, this.x - 35 * faceSize, 171 * faceSize + faceY, this.x - 55 * faceSize, 144 * faceSize + faceY);
      bezierVertex(this.x - 55 * faceSize, 144 * faceSize + faceY, this.x - 75 * faceSize, 99 * faceSize + faceY, this.x - 65 * faceSize, 54 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 54 * faceSize + faceY, this.x - 50 * faceSize, 9 * faceSize + faceY, this.x, 9 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        fill("#2e2e2e");
        strokeWeight(1);
        beginShape();
        vertex(this.x, 18 * faceSize + faceY);
        bezierVertex(this.x, 18 * faceSize + faceY, this.x + 40 * faceSize, 18 * faceSize + faceY, this.x + 55 * faceSize, 63 * faceSize + faceY);
        bezierVertex(this.x + 55 * faceSize, 63 * faceSize + faceY, this.x + 65 * faceSize, 90 * faceSize + faceY, this.x + 45 * faceSize, 135 * faceSize + faceY);
        bezierVertex(this.x + 45 * faceSize, 135 * faceSize + faceY, this.x + 25 * faceSize, 162 * faceSize + faceY, this.x, 171 * faceSize + faceY);
        bezierVertex(this.x, 171 * faceSize + faceY, this.x - 25 * faceSize, 162 * faceSize + faceY, this.x - 45 * faceSize, 135 * faceSize + faceY);
        bezierVertex(this.x - 45 * faceSize, 135 * faceSize + faceY, this.x - 65 * faceSize, 90 * faceSize + faceY, this.x - 55 * faceSize, 63 * faceSize + faceY);
        bezierVertex(this.x - 55 * faceSize, 63 * faceSize + faceY, this.x - 40 * faceSize, 18 * faceSize + faceY, this.x, 18 * faceSize + faceY);
        endShape();
      }
    }
    if (faceTemp == 3) {
      beginShape();
      vertex(this.x, 18 * faceSize + faceY);
      bezierVertex(this.x, 18 * faceSize + faceY, this.x + 55 * faceSize, 18 * faceSize + faceY, this.x + 65 * faceSize, 63 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 63 * faceSize + faceY, this.x + 70 * faceSize, 81 * faceSize + faceY, this.x + 65 * faceSize, 103.5 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 103.5 * faceSize + faceY, this.x + 40 * faceSize, 157.5 * faceSize + faceY, this.x, 153 * faceSize + faceY);
      bezierVertex(this.x, 153 * faceSize + faceY, this.x - 40 * faceSize, 157.5 * faceSize + faceY, this.x - 65 * faceSize, 103.5 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 103.5 * faceSize + faceY, this.x - 70 * faceSize, 81 * faceSize + faceY, this.x - 65 * faceSize, 63 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 63 * faceSize + faceY, this.x - 50 * faceSize, 18 * faceSize + faceY, this.x, 18 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        fill("#2e2e2e");
        strokeWeight(1);
        beginShape();
        vertex(this.x, 27 * faceSize + faceY);
        bezierVertex(this.x, 27 * faceSize + faceY, this.x + 45 * faceSize, 27 * faceSize + faceY, this.x + 55 * faceSize, 72 * faceSize + faceY);
        bezierVertex(this.x + 55 * faceSize, 72 * faceSize + faceY, this.x + 55 * faceSize, 90 * faceSize + faceY, this.x + 45 * faceSize, 121.5 * faceSize + faceY);
        bezierVertex(this.x + 45 * faceSize, 121.5 * faceSize + faceY, this.x + 25 * faceSize, 148.5 * faceSize + faceY, this.x, 144 * faceSize + faceY);
        bezierVertex(this.x, 144 * faceSize + faceY, this.x - 25 * faceSize, 148.5 * faceSize + faceY, this.x - 45 * faceSize, 121.5 * faceSize + faceY);
        bezierVertex(this.x - 45 * faceSize, 121.5 * faceSize + faceY, this.x - 55 * faceSize, 90 * faceSize + faceY, this.x - 55 * faceSize, 72 * faceSize + faceY);
        bezierVertex(this.x - 55 * faceSize, 72 * faceSize + faceY, this.x - 45 * faceSize, 27 * faceSize + faceY, this.x, 27 * faceSize + faceY);
        endShape();
      }
    }
    if (faceTemp == 4) {
      beginShape();
      vertex(this.x, 18 * faceSize + faceY);
      bezierVertex(this.x, 18 * faceSize + faceY, this.x + 55 * faceSize, 18 * faceSize + faceY, this.x + 65 * faceSize, 63 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 63 * faceSize + faceY, this.x + 70 * faceSize, 81 * faceSize + faceY, this.x + 55 * faceSize, 117 * faceSize + faceY);
      bezierVertex(this.x + 55 * faceSize, 117 * faceSize + faceY, this.x + 30 * faceSize, 153 * faceSize + faceY, this.x, 153 * faceSize + faceY);
      bezierVertex(this.x, 153 * faceSize + faceY, this.x - 30 * faceSize, 153 * faceSize + faceY, this.x - 55 * faceSize, 117 * faceSize + faceY);
      bezierVertex(this.x - 55 * faceSize, 117 * faceSize + faceY, this.x - 70 * faceSize, 81 * faceSize + faceY, this.x - 65 * faceSize, 63 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 63 * faceSize + faceY, this.x - 55 * faceSize, 18 * faceSize + faceY, this.x, 18 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        fill("#2e2e2e");
        strokeWeight(1);
        beginShape();
        vertex(this.x, 27 * faceSize + faceY);
        bezierVertex(this.x, 27 * faceSize + faceY, this.x + 45 * faceSize, 27 * faceSize + faceY, this.x + 55 * faceSize, 72 * faceSize + faceY);
        bezierVertex(this.x + 55 * faceSize, 72 * faceSize + faceY, this.x + 60 * faceSize, 90 * faceSize + faceY, this.x + 50 * faceSize, 108 * faceSize + faceY);
        bezierVertex(this.x + 50 * faceSize, 108 * faceSize + faceY, this.x + 25 * faceSize, 144 * faceSize + faceY, this.x, 144 * faceSize + faceY);
        bezierVertex(this.x, 144 * faceSize + faceY, this.x - 25 * faceSize, 144 * faceSize + faceY, this.x - 50 * faceSize, 108 * faceSize + faceY);
        bezierVertex(this.x - 50 * faceSize, 108 * faceSize + faceY, this.x - 60 * faceSize, 90 * faceSize + faceY, this.x - 55 * faceSize, 72 * faceSize + faceY);
        bezierVertex(this.x - 55 * faceSize, 72 * faceSize + faceY, this.x - 45 * faceSize, 27 * faceSize + faceY, this.x, 27 * faceSize + faceY);
        endShape();
      }
    }
    if (faceTemp == 5) {
      beginShape();
      vertex(this.x, 9 * faceSize + faceY);
      bezierVertex(this.x, 9 * faceSize + faceY, this.x + 85 * faceSize, 9 * faceSize + faceY, this.x + 85 * faceSize, 94.5 * faceSize + faceY);
      bezierVertex(this.x + 85 * faceSize, 94.5 * faceSize + faceY, this.x + 85 * faceSize, 181 * faceSize + faceY, this.x + 55 * faceSize, 181 * faceSize + faceY);
      bezierVertex(this.x + 55 * faceSize, 181 * faceSize + faceY, this.x + 35 * faceSize, 172 * faceSize + faceY, this.x, 162 * faceSize + faceY);
      bezierVertex(this.x, 162 * faceSize + faceY, this.x - 35 * faceSize, 162 * faceSize + faceY, this.x - 55 * faceSize, 181 * faceSize + faceY);
      bezierVertex(this.x - 55 * faceSize, 181 * faceSize + faceY, this.x - 85 * faceSize, 181 * faceSize + faceY, this.x - 85 * faceSize, 94.5 * faceSize + faceY);
      bezierVertex(this.x - 85 * faceSize, 94.5 * faceSize + faceY, this.x - 85 * faceSize, 9 * faceSize + faceY, this.x, 9 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        fill("#2e2e2e");
        strokeWeight(1);
        beginShape();
        vertex(this.x, 49.5 * faceSize + faceY);
        bezierVertex(this.x, 49.5 * faceSize + faceY, this.x + 55 * faceSize, 49.5 * faceSize + faceY, this.x + 65 * faceSize, 81 * faceSize + faceY);
        bezierVertex(this.x + 65 * faceSize, 81 * faceSize + faceY, this.x + 75 * faceSize, 144 * faceSize + faceY, this.x + 45 * faceSize, 153 * faceSize + faceY);
        bezierVertex(this.x + 45 * faceSize, 153 * faceSize + faceY, this.x + 35 * faceSize, 148.5 * faceSize + faceY, this.x, 153 * faceSize + faceY);
        bezierVertex(this.x, 153 * faceSize + faceY, this.x - 35 * faceSize, 148.5 * faceSize + faceY, this.x - 45 * faceSize, 153 * faceSize + faceY);
        bezierVertex(this.x - 45 * faceSize, 153 * faceSize + faceY, this.x - 75 * faceSize, 144 * faceSize + faceY, this.x - 65 * faceSize, 81 * faceSize + faceY);
        bezierVertex(this.x - 65 * faceSize, 81 * faceSize + faceY, this.x - 55 * faceSize, 49.5 * faceSize + faceY, this.x, 49.5 * faceSize + faceY);
        endShape();
      }
    }
    if (faceTemp == 6) {
      beginShape();
      vertex(this.x, 9 * faceSize + faceY);
      bezierVertex(this.x, 9 * faceSize + faceY, this.x + 85 * faceSize, 9 * faceSize + faceY, this.x + 85 * faceSize, 94.5 * faceSize + faceY);
      bezierVertex(this.x + 85 * faceSize, 94.5 * faceSize + faceY, this.x + 85 * faceSize, 181 * faceSize + faceY, this.x + 55 * faceSize, 181 * faceSize + faceY);
      bezierVertex(this.x + 55 * faceSize, 181 * faceSize + faceY, this.x + 35 * faceSize, 172 * faceSize + faceY, this.x, 162 * faceSize + faceY);
      bezierVertex(this.x, 162 * faceSize + faceY, this.x - 35 * faceSize, 162 * faceSize + faceY, this.x - 55 * faceSize, 181 * faceSize + faceY);
      bezierVertex(this.x - 55 * faceSize, 181 * faceSize + faceY, this.x - 85 * faceSize, 181 * faceSize + faceY, this.x - 85 * faceSize, 94.5 * faceSize + faceY);
      bezierVertex(this.x - 85 * faceSize, 94.5 * faceSize + faceY, this.x - 85 * faceSize, 9 * faceSize + faceY, this.x, 9 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        fill("#2e2e2e");
        strokeWeight(1);
        beginShape();
        vertex(this.x, 49.5 * faceSize + faceY);
        bezierVertex(this.x, 49.5 * faceSize + faceY, this.x + 55 * faceSize, 49.5 * faceSize + faceY, this.x + 65 * faceSize, 81 * faceSize + faceY);
        bezierVertex(this.x + 65 * faceSize, 81 * faceSize + faceY, this.x + 75 * faceSize, 126 * faceSize + faceY, this.x + 45 * faceSize, 117 * faceSize + faceY);
        bezierVertex(this.x + 45 * faceSize, 117 * faceSize + faceY, this.x, 108 * faceSize + faceY, this.x - 45 * faceSize, 117 * faceSize + faceY);
        bezierVertex(this.x - 45 * faceSize, 117 * faceSize + faceY, this.x - 75 * faceSize, 126 * faceSize + faceY, this.x - 65 * faceSize, 81 * faceSize + faceY);
        bezierVertex(this.x - 65 * faceSize, 81 * faceSize + faceY, this.x - 55 * faceSize, 49.5 * faceSize + faceY, this.x, 49.5 * faceSize + faceY);
        endShape();
      }
    }
    if (faceTemp == 7) {
      rect(this.x - (144 * faceSize) / 2, 60 + faceY, 144 * faceSize, 108 * faceSize, 8);

      if (displayFlag == 1) {
        strokeWeight(1);
        fill("#2e2e2e");
        rect(this.x - (136 * faceSize) / 2, 60 + (18 * faceSize / 2) + faceY, 136 * faceSize, 90 * faceSize, 6);
      }
    }
    if (faceTemp == 8) {
      rect(this.x - (160 * faceSize) / 2, 40 + faceY, 160 * faceSize, 120 * faceSize, 8);

      if (displayFlag == 1) {
        strokeWeight(1);
        fill("#2e2e2e");
        rect(this.x - (140 * faceSize) / 2, 40 + (20 * faceSize / 2) + faceY, 140 * faceSize, 100 * faceSize, 6);
      }
    }
    if (faceTemp == 9) {
      beginShape();
      vertex(this.x, 63 * faceSize + faceY);
      bezierVertex(this.x, 63 * faceSize + faceY, this.x + 80 * faceSize, 67.5 * faceSize + faceY, this.x + 85 * faceSize, 90 * faceSize + faceY);
      bezierVertex(this.x + 85 * faceSize, 90 * faceSize + faceY, this.x + 85 * faceSize, 171 * faceSize + faceY, this.x + 65 * faceSize, 162 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 162 * faceSize + faceY, this.x + 35 * faceSize, 162 * faceSize + faceY, this.x, 144 * faceSize + faceY);
      bezierVertex(this.x, 144 * faceSize + faceY, this.x - 35 * faceSize, 162 * faceSize + faceY, this.x - 65 * faceSize, 162 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 162 * faceSize + faceY, this.x - 85 * faceSize, 171 * faceSize + faceY, this.x - 85 * faceSize, 90 * faceSize + faceY);
      bezierVertex(this.x - 85 * faceSize, 90 * faceSize + faceY, this.x - 80 * faceSize, 67.5 * faceSize + faceY, this.x, 63 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        fill("#2e2e2e");
        strokeWeight(1);
        beginShape();
        vertex(this.x, 72 * faceSize + faceY);
        bezierVertex(this.x, 72 * faceSize + faceY, this.x + 75 * faceSize, 76 * faceSize + faceY, this.x + 75 * faceSize, 99 * faceSize + faceY);
        bezierVertex(this.x + 75 * faceSize, 99 * faceSize + faceY, this.x + 75 * faceSize, 162 * faceSize + faceY, this.x + 55 * faceSize, 153 * faceSize + faceY);
        bezierVertex(this.x + 55 * faceSize, 153 * faceSize + faceY, this.x + 35 * faceSize, 153 * faceSize + faceY, this.x, 135 * faceSize + faceY);
        bezierVertex(this.x, 135 * faceSize + faceY, this.x - 35 * faceSize, 153 * faceSize + faceY, this.x - 55 * faceSize, 153 * faceSize + faceY);
        bezierVertex(this.x - 55 * faceSize, 153 * faceSize + faceY, this.x - 75 * faceSize, 162 * faceSize + faceY, this.x - 75 * faceSize, 99 * faceSize + faceY);
        bezierVertex(this.x - 75 * faceSize, 99 * faceSize + faceY, this.x - 75 * faceSize, 76 * faceSize + faceY, this.x, 72 * faceSize + faceY);
        endShape();
      }
    }
    if (faceTemp == 10) {
      beginShape();
      vertex(this.x, 54 * faceSize + faceY);
      bezierVertex(this.x, 54 * faceSize + faceY, this.x + 85 * faceSize, 54 * faceSize + faceY, this.x + 85 * faceSize, 126 * faceSize + faceY);
      bezierVertex(this.x + 85 * faceSize, 126 * faceSize + faceY, this.x + 85 * faceSize, 171 * faceSize + faceY, this.x + 55 * faceSize, 171 * faceSize + faceY);
      bezierVertex(this.x + 55 * faceSize, 171 * faceSize + faceY, this.x + 15 * faceSize, 162 * faceSize + faceY, this.x, 162 * faceSize + faceY);
      bezierVertex(this.x, 162 * faceSize + faceY, this.x - 15 * faceSize, 162 * faceSize + faceY, this.x - 55 * faceSize, 171 * faceSize + faceY);
      bezierVertex(this.x - 55 * faceSize, 171 * faceSize + faceY, this.x - 85 * faceSize, 171 * faceSize + faceY, this.x - 85 * faceSize, 126 * faceSize + faceY);
      bezierVertex(this.x - 85 * faceSize, 126 * faceSize + faceY, this.x - 85 * faceSize, 54 * faceSize + faceY, this.x, 54 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        strokeWeight(1);
        fill("#2e2e2e");
        beginShape();
        vertex(this.x, 63 * faceSize + faceY);
        bezierVertex(this.x, 63 * faceSize + faceY, this.x + 85 * faceSize, 63 * faceSize + faceY, this.x + 75 * faceSize, 135 * faceSize + faceY);
        bezierVertex(this.x + 75 * faceSize, 135 * faceSize + faceY, this.x + 75 * faceSize, 162 * faceSize + faceY, this.x + 45 * faceSize, 162 * faceSize + faceY);
        bezierVertex(this.x + 45 * faceSize, 162 * faceSize + faceY, this.x + 5 * faceSize, 153 * faceSize + faceY, this.x, 153 * faceSize + faceY);
        bezierVertex(this.x, 153 * faceSize + faceY, this.x - 5 * faceSize, 153 * faceSize + faceY, this.x - 45 * faceSize, 162 * faceSize + faceY);
        bezierVertex(this.x - 45 * faceSize, 162 * faceSize + faceY, this.x - 75 * faceSize, 162 * faceSize + faceY, this.x - 75 * faceSize, 135 * faceSize + faceY);
        bezierVertex(this.x - 75 * faceSize, 135 * faceSize + faceY, this.x - 85 * faceSize, 63 * faceSize + faceY, this.x, 63 * faceSize + faceY);
        endShape();
      }
    }
    if (faceTemp == 11) {
      ellipse(this.x, 95 * faceSize + faceY, 140 * faceSize, 150 * faceSize);

      if (displayFlag == 1) {
        strokeWeight(1);
        fill("#2e2e2e");
        ellipse(this.x, 95 * faceSize + faceY, 130 * faceSize, 140 * faceSize);
      }
    }
    if (faceTemp == 12) {
      beginShape();
      vertex(this.x, 45 * faceSize + faceY);
      bezierVertex(this.x, 45 * faceSize + faceY, this.x + 55 * faceSize, 45 * faceSize + faceY, this.x + 65 * faceSize, 54 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 54 * faceSize + faceY, this.x + 95 * faceSize, 94.5 * faceSize + faceY, this.x + 65 * faceSize, 153 * faceSize + faceY);
      bezierVertex(this.x + 65 * faceSize, 153 * faceSize + faceY, this.x, 162 * faceSize + faceY, this.x - 65 * faceSize, 153 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 153 * faceSize + faceY, this.x - 95 * faceSize, 94.5 * faceSize + faceY, this.x - 65 * faceSize, 54 * faceSize + faceY);
      bezierVertex(this.x - 65 * faceSize, 54 * faceSize + faceY, this.x - 55 * faceSize, 45 * faceSize + faceY, this.x, 45 * faceSize + faceY);
      endShape();

      if (displayFlag == 1) {
        strokeWeight(1);
        fill("#2e2e2e");
        beginShape();
        vertex(this.x, 54 * faceSize + faceY);
        bezierVertex(this.x, 54 * faceSize + faceY, this.x + 45 * faceSize, 54 * faceSize + faceY, this.x + 55 * faceSize, 63 * faceSize + faceY);
        bezierVertex(this.x + 55 * faceSize, 63 * faceSize + faceY, this.x + 85 * faceSize, 94.5 * faceSize + faceY, this.x + 55 * faceSize, 144 * faceSize + faceY);
        bezierVertex(this.x + 55 * faceSize, 144 * faceSize + faceY, this.x, 153 * faceSize + faceY, this.x - 55 * faceSize, 144 * faceSize + faceY);
        bezierVertex(this.x - 55 * faceSize, 144 * faceSize + faceY, this.x - 85 * faceSize, 94.5 * faceSize + faceY, this.x - 55 * faceSize, 63 * faceSize + faceY);
        bezierVertex(this.x - 55 * faceSize, 63 * faceSize + faceY, this.x - 45 * faceSize, 54 * faceSize + faceY, this.x, 54 * faceSize + faceY);
        endShape();
      }
    }
    fill('#FFF');
  }
}
let robotFace = new Face(cnvsW / 2, 400, "#eceff1");

let eyeTemp = 1, eyePos = 25, eyeSize = 1, eyeDis = 40, irisSize = 1;
class Eye {
  constructor(x, y, eyeH, eyeW, irisH, irisW, color) {
    this.x = x;
    this.y = y;
    this.eyeH = eyeH;
    this.eyeW = eyeW;
    this.irisH = irisH;
    this.irisW = irisW;
    this.color = color;
  }

  resize() {
    if (eyeTemp == 1) this.eyeH = 40, this.eyeW = 40, this.irisH = 32, this.irisW = 32;
    if (eyeTemp == 2) this.eyeH = 40, this.eyeW = 40, this.irisH = 24, this.irisW = 24;
    if (eyeTemp == 3) this.eyeH = 40, this.eyeW = 40, this.irisH = 12, this.irisW = 12;
    if (eyeTemp == 4) this.eyeH = 40, this.eyeW = 40, this.irisH = 6, this.irisW = 6;
    if (eyeTemp == 5) this.eyeH = 24, this.eyeW = 40, this.irisH = 32, this.irisW = 32;
    if (eyeTemp == 6) this.eyeH = 24, this.eyeW = 40, this.irisH = 24, this.irisW = 24;
    if (eyeTemp == 7) this.eyeH = 24, this.eyeW = 40, this.irisH = 12, this.irisW = 12;
    if (eyeTemp == 8) this.eyeH = 24, this.eyeW = 40, this.irisH = 6, this.irisW = 6;
    if (eyeTemp == 9) this.eyeH = 12, this.eyeW = 40, this.irisH = 32, this.irisW = 32;
    if (eyeTemp == 10) this.eyeH = 12, this.eyeW = 40, this.irisH = 24, this.irisW = 24;
    if (eyeTemp == 11) this.eyeH = 12, this.eyeW = 40, this.irisH = 12, this.irisW = 12;
    if (eyeTemp == 12) this.eyeH = 12, this.eyeW = 40, this.irisH = 6, this.irisW = 6;
    if (eyeTemp == 13) this.eyeH = 0, this.eyeW = 0, this.irisH = 0, this.irisW = 0;

    document.getElementById("eye-height").setAttribute("value", this.eyeH);
  }

  draw() {
    // 輪郭のボーダー
    strokeWeight(1);
    stroke("#cfd8dc");
    fill('#FFF');

    // 輪郭
    secnv.strokeWeight(1.5);
    secnv.stroke("#cfd8dc");
    secnv.ellipse(this.x + eyeDis, this.y + eyePos, this.eyeW * eyeSize, this.eyeH * eyeSize);
    secnv.ellipse(this.x - eyeDis, this.y + eyePos, this.eyeW * eyeSize, this.eyeH * eyeSize);

    // 虹彩
    secnv.erase();
    secnv.ellipse(this.x + eyeDis, this.y + eyePos, this.irisW * eyeSize * irisSize, this.irisH * eyeSize * irisSize);
    secnv.ellipse(this.x - eyeDis, this.y + eyePos, this.irisW * eyeSize * irisSize, this.irisH * eyeSize * irisSize);
    secnv.noErase();

    // 背面
    fill(this.color);
    ellipse(this.x + eyeDis, this.y + eyePos, this.eyeW * eyeSize, this.eyeH * eyeSize);
    ellipse(this.x - eyeDis, this.y + eyePos, this.eyeW * eyeSize, this.eyeH * eyeSize);

    image(secnv, 0, 0);

    fill('#FFF');
    stroke("#9e9e9e");
    strokeWeight(3);
  }
}
let robotEye = new Eye(cnvsW / 2, 70, 40, 40, 32, 32, "#212121");

let mouseTemp = 1, mouseSize = 0, mousePos = 0, mouseH = 0;
class Mouse {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    fill(this.color);
    strokeWeight(1.5);
    stroke("#cfd8dc");
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
      noFill();
      arc(this.x, this.y - 10 + mousePos, 40 + mouseSize, 40 + mouseH, 0.4, PI - 0.4);
    }
    if (mouseTemp == 7) {
      noFill();
      arc(this.x, this.y + 16 + mousePos, 40 + mouseSize, 40 + mouseH, PI + 0.4, TWO_PI - 0.4);
    }
    if (mouseTemp == 8) {
      noFill();
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
let robotMouse = new Mouse(cnvsW / 2, 140, "#eceff1");

let bodyTemp = 1, bodyPos = 0, bodyH = 0, bodyW = 0, bodySize = 1;
class Body {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    strokeWeight(2.5);
    stroke("#b0bec5");
    fill(this.color);
    if (bodyTemp == 1) {
      // 首
      ellipse(this.x, this.y + 16 * bodySize + bodyPos, 60 * bodySize, 40 * bodySize);

      // 左腕
      rect(this.x - 130 * bodySize, this.y + 40 * bodySize + bodyPos, 48 * bodySize, 104 * bodySize, 16 * bodySize); // 上腕
      rect(this.x - 130 * bodySize, this.y + 152 * bodySize + bodyPos, 48 * bodySize, 96 * bodySize, 16 * bodySize); // 前腕
      rect(this.x - 130 * bodySize, this.y + 138 * bodySize + bodyPos, 48 * bodySize, 20 * bodySize, 4 * bodySize, 4 * bodySize, 16 * bodySize, 16 * bodySize); // 肘
      ellipse(this.x - 96 * bodySize, this.y + 52 * bodySize + bodyPos, 56 * bodySize, 56 * bodySize); // 肩
      // rect(this.x - 92, this.y + 24 + bodyPos, 48, 56, 12); // 肩

      // 右腕
      rect(this.x + 82 * bodySize, this.y + 40 * bodySize + bodyPos, 48 * bodySize, 104 * bodySize, 16 * bodySize); // 上腕
      rect(this.x + 82 * bodySize, this.y + 152 * bodySize + bodyPos, 48 * bodySize, 96 * bodySize, 16 * bodySize); // 前腕
      rect(this.x + 82 * bodySize, this.y + 138 * bodySize + bodyPos, 48 * bodySize, 20 * bodySize, 4 * bodySize, 4 * bodySize, 16 * bodySize, 16 * bodySize); // 肘
      ellipse(this.x + 96 * bodySize, this.y + 52 * bodySize + bodyPos, 56 * bodySize, 56 * bodySize); // 肩  
      // rect(this.x + 48, this.y + 24 + bodyPos, 48, 56, 12); // 肩    

      // 左足
      rect(this.x - 64 * bodySize, this.y + 272 * bodySize + bodyPos, 60 * bodySize, 120 * bodySize, 12 * bodySize); // 下腿
      rect(this.x - 64 * bodySize, this.y + 168 * bodySize + bodyPos, 60 * bodySize, 96 * bodySize, 12 * bodySize); // 大腿
      rect(this.x - 66 * bodySize, this.y + 256 * bodySize + bodyPos, 64 * bodySize, 20 * bodySize, 4 * bodySize, 4 * bodySize, 20 * bodySize, 20 * bodySize); // 膝

      // 右足
      rect(this.x + 6 * bodySize, this.y + 272 * bodySize + bodyPos, 60 * bodySize, 120 * bodySize, 12 * bodySize); // 下腿
      rect(this.x + 6 * bodySize, this.y + 168 * bodySize + bodyPos, 60 * bodySize, 96 * bodySize, 12 * bodySize); // 大腿
      rect(this.x + 4 * bodySize, this.y + 256 * bodySize + bodyPos, 64 * bodySize, 20 * bodySize, 4 * bodySize, 4 * bodySize, 20 * bodySize, 20 * bodySize); // 膝

      // 腰
      rect(this.x - 52 * bodySize, this.y + 144 * bodySize + bodyPos, 104 * bodySize, 40 * bodySize, 8 * bodySize, 8 * bodySize, 80 * bodySize, 80 * bodySize);
      rect(this.x - 40 * bodySize, this.y + 144 * bodySize + bodyPos, 80 * bodySize, 16 * bodySize, 30 * bodySize);

      // 胴体
      rect(this.x - 76 * bodySize, this.y + 16 * bodySize + bodyPos, 152 * bodySize, 136 * bodySize, 20 * bodySize, 20 * bodySize, 80 * bodySize, 80 * bodySize);

      // 右手
      rect(this.x - 144 * bodySize, this.y + 240 * bodySize + bodyPos, 40 * bodySize, 12 * bodySize, 4 * bodySize);
      rect(this.x - 128 * bodySize, this.y + 240 * bodySize + bodyPos, 12 * bodySize, 40 * bodySize, 4 * bodySize);
      rect(this.x - 112 * bodySize, this.y + 240 * bodySize + bodyPos, 12 * bodySize, 40 * bodySize, 4 * bodySize);
      rect(this.x - 96 * bodySize, this.y + 240 * bodySize + bodyPos, 12 * bodySize, 40 * bodySize, 4 * bodySize);
      rect(this.x - 134 * bodySize, this.y + 216 * bodySize + bodyPos, 56 * bodySize, 40 * bodySize, 4 * bodySize);

      // 左手
      rect(this.x + 104 * bodySize, this.y + 240 * bodySize + bodyPos, 40 * bodySize, 12 * bodySize, 4 * bodySize);
      rect(this.x + 116 * bodySize, this.y + 240 * bodySize + bodyPos, 12 * bodySize, 40 * bodySize, 4 * bodySize);
      rect(this.x + 100 * bodySize, this.y + 240 * bodySize + bodyPos, 12 * bodySize, 40 * bodySize, 4 * bodySize);
      rect(this.x + 84 * bodySize, this.y + 240 * bodySize + bodyPos, 12 * bodySize, 40 * bodySize, 4 * bodySize);
      rect(this.x + 78 * bodySize, this.y + 216 * bodySize + bodyPos, 56 * bodySize, 40 * bodySize, 4 * bodySize);
    }
    if (bodyTemp == 2) {
      ellipse(this.x, 196 * bodySize + bodyPos, 80 * bodySize, 60 * bodySize); // 首

      rect(this.x - 116 * bodySize, 248 * bodySize + bodyPos, 28 * bodySize, 90 * bodySize, 8 * bodySize); // 左腕
      rect(this.x - 120 * bodySize, 292 * bodySize + bodyPos, 40 * bodySize, 80 * bodySize, 8 * bodySize); // 左前腕
      ellipse(this.x - 88 * bodySize, 248 * bodySize + bodyPos, 64 * bodySize, 64 * bodySize); // 左肩
      rect(this.x - 88 * bodySize, 216 * bodySize + bodyPos, 24 * bodySize, 64 * bodySize, 8 * bodySize); // 左肩の付け根
      ellipse(this.x - 100 * bodySize, 368 * bodySize + bodyPos, 48 * bodySize, 48 * bodySize); // 左手

      rect(this.x + 88 * bodySize, 248 * bodySize + bodyPos, 28 * bodySize, 90 * bodySize, 8 * bodySize); // 右腕
      rect(this.x + 82 * bodySize, 292 * bodySize + bodyPos, 40 * bodySize, 80 * bodySize, 8 * bodySize); // 右前腕
      ellipse(this.x + 88 * bodySize, 248 * bodySize + bodyPos, 64 * bodySize, 64 * bodySize); // 右肩
      rect(this.x + 64 * bodySize, 216 * bodySize + bodyPos, 24 * bodySize, 64 * bodySize, 8 * bodySize); // 右肩の付け根
      ellipse(this.x + 102 * bodySize, 368 * bodySize + bodyPos, 48 * bodySize, 48 * bodySize); // 右手

      rect(this.x - 80 * bodySize, 432 * bodySize + bodyPos, 160 * bodySize, 40 * bodySize, 12 * bodySize); // 足

      // 腰
      beginShape();
      vertex(this.x, 350 * bodySize + bodyPos);
      bezierVertex(this.x, 350 * bodySize + bodyPos, this.x + 85, 350 * bodySize + bodyPos, this.x + 85 * bodySize, 430 * bodySize + bodyPos);
      bezierVertex(this.x + 85 * bodySize, 430 * bodySize + bodyPos, this.x + 85 * bodySize, 450 * bodySize + bodyPos, this.x + 55 * bodySize, 450 * bodySize + bodyPos);
      bezierVertex(this.x + 55, 450 * bodySize + bodyPos, this.x + 15 * bodySize, 450 * bodySize + bodyPos, this.x, 450 * bodySize + bodyPos);
      bezierVertex(this.x, 450 * bodySize + bodyPos, this.x - 15 * bodySize, 450 * bodySize + bodyPos, this.x - 55 * bodySize, 450 * bodySize + bodyPos);
      bezierVertex(this.x - 55 * bodySize, 450 * bodySize + bodyPos, this.x - 85 * bodySize, 450 * bodySize + bodyPos, this.x - 85 * bodySize, 430 * bodySize + bodyPos);
      bezierVertex(this.x - 85 * bodySize, 430 * bodySize + bodyPos, this.x - 85 * bodySize, 350 * bodySize + bodyPos, this.x, 350 * bodySize + bodyPos);
      endShape();

      rect(this.x - 70 * bodySize, 196 * bodySize + bodyPos, 140 * bodySize, 210 * bodySize, 16 * bodySize, 16 * bodySize, 70 * bodySize, 70 * bodySize); // 胴体
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
let robotBody = new Body(cnvsW / 2, 180, "#eceff1");


// -- 1.3 クラスに影響する関数
// CHANGE_TEMP / テンプレートの変更
function changeTemp(parts, num) {
  if (parts == "face") {
    faceTemp = num;
    console.log(parts, faceTemp)
  }
  if (parts == "eye") {
    eyeTemp = num;
    robotEye.resize();
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

// // 2.1 SETUP: キャンバスの初期化
// let cnvs; // setup()でキャンバス生成，draw()で位置調節や指定した親要素にアタッチ
// let secnvs;
// function setup() {
//   cnvs = createCanvas(cnvsW, cnvsH); // Creating a Canvas
//   secnvs = createCanvas(cnvsW, cnvsH); // Creating a Canvas
//   cnvs.position(0, 0);
// }

// 2.2 DRAW：setup後に繰り返し実行（フレーム単位）
function draw() {
  tabSwiching();
  clear();
  secnv.clear();

  cnvs.parent("canvas");
  // secnv.parent("canvas");

  var newBodyPos = document.getElementById("body-pos").getAttribute("value");
  var newBodySize = document.getElementById("body-size").getAttribute("value");
  if (bodyPos != newBodyPos) bodyPos = Number(newBodyPos);
  if (bodySize != newBodyPos) bodySize = Number(newBodySize);
  robotBody.draw(); // 体の描写

  var facePos = document.getElementById("face-pos").getAttribute("value");
  var newFaceSize = document.getElementById("face-size").getAttribute("value");
  if (facePos != faceY) faceY = Number(facePos) * -1;
  if (faceSize != newFaceSize) faceSize = Number(newFaceSize);
  if ("true" == document.getElementById("basic-switch").getAttribute("aria-checked")) {
    displayFlag = 1;
  } else {
    displayFlag = 0;
  }
  onDisplaySwitch();
  robotFace.draw(); // 顔の描画

  var newIrisSize = document.getElementById("iris-size").getAttribute("value");
  var newEyeSize = document.getElementById("eye-size").getAttribute("value");
  var newEyePos = document.getElementById("eye-pos").getAttribute("value");
  var newEyeDis = document.getElementById("eye-dis").getAttribute("value");
  var newEyeHeight = document.getElementById("eye-height").getAttribute("value");
  if (irisSize != newIrisSize) irisSize = Number(newIrisSize);
  if (eyeSize != newEyeSize) eyeSize = Number(newEyeSize);
  if (eyePos != newEyePos) eyePos = Number(newEyePos) * -1 + 25;
  if (eyeDis != newEyeDis) eyeDis = Number(newEyeDis);
  if (robotEye.eyeH != newEyeHeight) robotEye.eyeH = Number(newEyeHeight);
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

  const content6 = document.getElementById("content6");
  const tab6 = document.getElementById("mdc-tab-6").getAttribute("aria-selected");
  if (tab6 != "true") content6.classList.remove("active"), content6.classList.add("disable");
  if (tab6 == "true") content6.classList.remove("disable"), content6.classList.add("active"), index = 6;

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

bgStatus = "";
function changeBG(wIMG) {
  var canvas = document.getElementById("canvas");
  canvas.style.backgroundImage = "url(" + wIMG + ")";
  bgStatus = wIMG;
}

function onDisplaySwitch() {
  for (var i = 1; i <= 12; i++) {
    let path = "image" + i.toString();
    const image = document.getElementById(path);
    if (displayFlag == 0) image.setAttribute("src", "./assest/img/face" + i.toString() + ".png");
    if (displayFlag == 1) image.setAttribute("src", "./assest/img/face0" + i.toString() + ".png");
  }
}

function saveImage() {
  saveCanvas(cnvs, 'result', 'png');
}

function saveParameters() {
  let arrayOfParameter = [faceTemp, faceY, eyeDis, eyePos, eyeSize, eyeTemp, mouseH, mousePos, mouseSize, mouseTemp, bodyH, bodyPos, bodyTemp, bodyW];
  save(arrayOfParameter, 'parameter.txt');
}