let bgImg;
let scrollY = 0;
let contentHeight = 0;

// 일정 UI 시작 기준
let scheduleStartY = 0;
let scheduleContentHeight = 0;
let maxPreviewHeight = 80;

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
    detail: "<비분별의 존재론 : 예술이 진리(진실)을 취하는 법> 강연입니다. 예술은 진리를 선취하는 탐험의 여정입니다.",
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
    detail: "강점 중심의 자기서사에서 벗어나, 작업을 하며 반복되는 약점의 패턴을 바라보고 의미를 고민하는 시간입니다.",
    open: false,
    fullOpen: false
  },
  {
    time: "16:00~18:00",
    title: "신현지 작가님 워크숍",
    detail: "예약제로 진행됩니다. 퍼포먼스실 308호에서 차를 마시며 시를 쓰는 워크숍입니다.",
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

  // ✅ 전체 콘텐츠 높이 계산
  contentHeight = scheduleStartY + scheduleContentHeight;
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

  image(img, x + (w - drawW) / 2, y + (h - drawH) / 2, drawW, drawH);
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
function drawSchedule() {
  let y = scheduleStartY;
  let startY = y;
  let padding = width * 0.05;

  for (let item of schedule) {
    let titleH = 64;

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
      let fullHeight = maxPreviewHeight * 2;
      let showHeight = item.fullOpen ? fullHeight : maxPreviewHeight;

      fill(10);
      stroke(50);
      rect(padding, y, width - padding * 2, showHeight, 12);

      fill(200);
      noStroke();
      textAlign(LEFT, TOP);
      textSize(txtSize);
      textLeading(txtSize * 1.4);
      text(item.detail, padding + 16, y + 12, maxTextW);

      if (!item.fullOpen) {
        fill(255);
        textAlign(RIGHT, BOTTOM);
        text("더보기 ▼", width - padding - 16, y + showHeight - 6);
      }

      y += showHeight;
    }

    y += 12;
  }

  // ✅ 일정 전체 높이만 저장
  scheduleContentHeight = y - startY;
}

// ----------------------------
function touchMoved() {
  scrollY += movedY;
  let minScroll = Math.min(height - contentHeight, 0);
  scrollY = constrain(scrollY, minScroll, 0);
  return false;
}

function mouseWheel(e) {
  scrollY -= e.delta;
  let minScroll = Math.min(height - contentHeight, 0);
  scrollY = constrain(scrollY, minScroll, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
