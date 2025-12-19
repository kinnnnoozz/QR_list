let bgImg;
let scrollY = 0;
let contentHeight = 0;

// 일정 UI 시작 기준
let scheduleStartY = 0;
let maxPreviewHeight = 80; // 미리보기 최대 높이

// 행사 일정 데이터
let schedule = [
  {
    time: "10:00~19:00",
    title: "플리마켓",
    detail: "신축갤러리에서 학생들의 개인 물품과 작업 소품을 만나보실 수 있습니다. 가격은 물품마다 상이합니다. 직접와서 관람하신 후에 전시 기념품을 남겨보세요",
    open: false,
    fullOpen: false
  },
  {
    time: "11:00~19:00",
    title: "김연주 학생 워크숍",
    detail: "",
    open: false,
    fullOpen: false
  },
  {
    time: "14:00~17:00",
    title: "서주이 학생 캐리커쳐",
    detail: "",
    open: false,
    fullOpen: false
  },
  {
    time: "14:00~16:00",
    title: "제이씨네던앤곤 <바른한끼>",
    detail: "돌곶이역 인근 식당 '제이씨네 던앤곤' 사장님께서 간단한 음식을 준비하며 함께 대화하는 시간을 갖습니다. 준비해주신 재료들을 직접 선택하고, 사장님과 대화하며 본인만의 카나페를 만들어보세요!",
    open: false,
    fullOpen: false
  },
  {
    time: "14:00~15:00",
    title: "민승기 선생님 강연",
    detail: "한국예술종합학교에서 '예술과 정신분석', '그리스 고전 읽기', '신화와 예술' 강의를 담당해주시는 민승기 교수님의 강연이 진행됩니다.",
    open: false,
    fullOpen: false
  },
  {
    time: "15:20~16:20",
    title: "서용순 선생님 강연",
    detail: "<비분별의 존재론 : 예술이 진리(진실)을 취하는 법>, 한국예술종합학교에서 '현대 철학의 흐름', '세계사' 강의를 담당해주시는 서용순 교수님의 강연이 진행됩니다. \n\n\비분별의 존재론 : 예술이 진리(진실)을 선취하는 법.'나는 타자다'라는 시인 랭보의 단언은 단순히 차이를 선언하는 것을 넘어서 존재에 대한 새로운 사유의 지평으로 나아간다. 나와 타자의 비분리, 비분별의 사유가 그 안에 있다. '나는 나와 다름'이라는 테제에서 출발하여, 모든 개별적 동일자와 절대적으로 분리된 타자 모두를 기각하는 새로운 존재론의 지평을 사유함으로써 우리는 존재의 진리에 가닿는다. 예술은 그 과정을 실행함으로써 진리를 선취하는 탐험의 여정이다.\n\n",
    open: false,
    fullOpen: false
  },
  {
    time: "16:30~18:00",
    title: "<아두요가>",
    detail: "김영주, 양지우 학생 워크숍입니다. 기술과 요가가 만나, DIY 인터랙션 장치로 자신의 몸을 직접 만지며 체험하는 시간을 가져봅시다.",
    open: false,
    fullOpen: false
  },
  {
    time: "18:00~19:00",
    title: "임영주 선생님 워크숍",
    detail: "한국예술종합학교에서 '스튜디오 2', '스튜디오 4' 강의를 담당해주시는 임영주 교수님의 워크샵이 진행됩니다. '졸업에 앞서 버린것을 돌아보는 시간을 갖는것입니다. 강점 중심의 자기서사에서 벗어나, 작업을 하며 반복되는 약점의 패턴을 바라보고 의미를 고민하는 시간입니다.' ",
    open: false,
    fullOpen: false
  },
  {
    time: "16:00~18:00",
    title: "신현지 작가님 워크샵",
    detail: "해당 워크샵은 예약제로, 연수동 퍼포먼스실 308호에서 진행됩니다. \n\n\ 땀 흘리는 나무\n\n <땀 흘리는 나무>를 바라보며 차를 마시고 시를 쓰는 순간을 제안한다. <땀 흘리는 나무>는 식물과 동물, 자연과 인간이 결합된 상태를 드러내는 조형물이다. 표면에 작고 조밀한 구멍들이 나 있어 물을 담으면 땀을 흘리는 것처럼 물방울이 맺힌다. <땀 흘리는 나무>의 표면에서 비질비질 흘러나오는 물방울들은 멈추어져 있는 듯 보이는 존재들이 우리 앞에서 숨을 내쉬고 땀을 흘리며 자신의 신체 작용을 보여주고 있는 것 같은 환영을 불러일으킨다.\n\차를 함께 마시며 같은 맛과 향을 공유하고, 차를 통해 닿게 된 심상들로 시를 쓴다. 차를 마시면서 쓰여진 시들은 내가 아닌 누군가로 전환된 상태의 다양한 화자들을 불러들인다. 전시장에 모인 관객들과 지금의 ‘나’를 벗고 또 다른 누군가가 되는 상상을 시도한다.\n\n\나와 나 아닌 것, 나에서 벗어난 것, 섬처럼 떨어져 있는 존재들과 연결되고 접합되는 경험을 가져본다.\n\n",
    open: false,
    fullOpen: false
  }
];

function preload() {
  bgImg = loadImage("background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("sans-serif");
}

function draw() {
  background(0);
  translate(0, scrollY);

  let imgH = width * 0.6;
  scheduleStartY = imgH - height * 0.25;

  drawHeaderImage(imgH);
  drawSchedule();
}

// ----------------------------
function drawCoverImage(img, x, y, w, h) {
  let imgRatio = img.width / img.height;
  let areaRatio = w / h;

  let drawW, drawH;
  if (imgRatio > areaRatio) {
    drawH = h;
    drawW = h * imgRatio;
  } else {
    drawW = w;
    drawH = w / imgRatio;
  }

  let dx = x + (w - drawW) / 2;
  let dy = y + (h - drawH) / 2;

  image(img, dx, dy, drawW, drawH);
}

// ----------------------------
function drawHeaderImage(imgH) {
  drawCoverImage(bgImg, 0, 0, width, imgH);

  fill(0, 180);
  noStroke();
  rect(0, scheduleStartY - 62, width, 55);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(width * 0.06);
  text("행사의 날 일정", width / 2, scheduleStartY - 32);
}

// ----------------------------
function getTextBlockHeight(txt, txtSize, maxWidth) {
  textSize(txtSize);
  textLeading(txtSize * 1.4);

  let words = txt.split(" ");
  let line = "";
  let lines = 1;

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + " ";
    if (textWidth(testLine) > maxWidth) {
      line = words[i] + " ";
      lines++;
    } else {
      line = testLine;
    }
  }

  let lineH = textAscent() + textDescent();
  return lines * lineH * 1.4 + 24; // padding 포함
}

// ----------------------------
function drawSchedule() {
  let y = scheduleStartY;
  let padding = width * 0.05;

  for (let i = 0; i < schedule.length; i++) {
    let item = schedule[i];
    let titleH = 64;

    // 제목 박스
    fill(20);
    stroke(70);
    rect(padding, y, width - padding * 2, titleH, 12);

    fill(255);
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(width * 0.045);
    text(item.time + "  " + item.title, padding + 16, y + titleH / 2);

    y += titleH;

    if (item.open) {
      let txtSize = width * 0.032;
      let maxTextW = width - padding * 2 - 32;
      let fullHeight = getTextBlockHeight(item.detail, txtSize, maxTextW);

      // 긴 글만 잘리게 처리
      let showHeight = fullHeight > maxPreviewHeight ? (item.fullOpen ? fullHeight : maxPreviewHeight) : fullHeight;

      // 박스
      fill(10);
      stroke(50);
      rect(padding, y, width - padding * 2, showHeight, 12);

      // 텍스트 clip 처리
      push();
      translate(padding, y);
      fill(200);
      noStroke();
      textAlign(LEFT, TOP);
      textSize(txtSize);
      textLeading(txtSize * 1.4);

      let clipH = showHeight - 24;
      drawingContext.save();
      drawingContext.beginPath();
      drawingContext.rect(0, 0, maxTextW, clipH);
      drawingContext.clip();

      text(item.detail, 16, 12, maxTextW);
      drawingContext.restore();
      pop();

      // 더보기/접기 버튼 표시
      if (!item.fullOpen && fullHeight > maxPreviewHeight) {
        fill(255);
        textAlign(RIGHT, BOTTOM);
        textSize(txtSize);
        text("더보기 ▼", width - padding - 16, y + showHeight - 6);
      } else if (item.fullOpen) {
        fill(255);
        textAlign(RIGHT, BOTTOM);
        textSize(txtSize);
        text("접기 ▲", width - padding - 16, y + showHeight - 6);
      }

      y += showHeight;
    }

    y += 12;
  }

  contentHeight = y;
}

// ----------------------------
function mousePressed() {
  let y = scheduleStartY;
  let padding = width * 0.05;

  for (let i = 0; i < schedule.length; i++) {
    let item = schedule[i];
    let titleH = 64;

    // 제목 클릭 → 다른 일정 닫기
    if (mouseX > padding && mouseX < width - padding &&
        mouseY - scrollY > y && mouseY - scrollY < y + titleH) {
      for (let j = 0; j < schedule.length; j++) {
        if (j !== i) {
          schedule[j].open = false;
          schedule[j].fullOpen = false;
        }
      }
      item.open = !item.open;
      item.fullOpen = false; // 처음 열 때는 미리보기만
      break;
    }

    y += titleH;

    // 상세 내용 클릭 → 더보기/접기 토글
    if (item.open) {
      let txtSize = width * 0.032;
      let maxTextW = width - padding * 2 - 32;
      let fullHeight = getTextBlockHeight(item.detail, txtSize, maxTextW);
      let showHeight = fullHeight > maxPreviewHeight ? (item.fullOpen ? fullHeight : maxPreviewHeight) : fullHeight;

      if (mouseX > padding && mouseX < width - padding &&
          mouseY - scrollY > y && mouseY - scrollY < y + showHeight) {
        if (fullHeight > maxPreviewHeight) {
          item.fullOpen = !item.fullOpen; // 토글
        }
        break;
      }

      y += showHeight;
    }

    y += 12;
  }
}

// ----------------------------
function touchMoved() {
  scrollY -= movedY;
  scrollY = constrain(scrollY, height - contentHeight - 20, 0);
  return false;
}


function mouseWheel(e) {
  scrollY -= e.delta;
  scrollY = constrain(scrollY, height - contentHeight - 20, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

