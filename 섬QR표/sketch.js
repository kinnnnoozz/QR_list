let rows = 10;  // 세로 10칸
let cols = 5;   // 가로 5칸

// 첫 번째 줄(헤더 row)에 표시할 텍스트
let headerLabels = ["날짜?", "?", "?", "?", "?"];

function setup() {
  let canvasWidth = windowWidth;
  let canvasHeight = windowHeight * 1.4;
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(255);
  drawTable();
}

function windowResized() {
  let canvasWidth = windowWidth;
  let canvasHeight = windowHeight * 1.4;
  resizeCanvas(canvasWidth, canvasHeight);
}

function drawTable() {
  let margin = width * 0.05;

  let cellW = (width - margin * 2) / cols;

  // 헤더 줄과 일반 줄의 높이 차이
  let headerH = height * 0.03;
  let normalH = (height * 0.8 - headerH) / (rows - 1);

  textAlign(CENTER, CENTER);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let cellH = (r === 0) ? headerH : normalH;
      let x = margin + c * cellW;

      // y 위치 계산
      let y = margin;
      for (let i = 0; i < r; i++) {
        y += (i === 0 ? headerH : normalH);
      }

      // 셀 배경
      fill(255);
      stroke(0);
      rect(x, y, cellW, cellH);

      // 텍스트 표시
      fill(0);
      textSize(width * 0.04);

      if (r === 0) {
        // 헤더 줄의 텍스트
        text(headerLabels[c], x + cellW / 2, y + cellH / 2);
      } else {
        // 내부 셀 내용 (예: 비움 or 좌표)
        text(`(${r},${c})`, x + cellW / 2, y + cellH / 2);
      }
    }
  }
}
