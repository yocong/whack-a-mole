// ================ 전역변수 정의 영역 ============//


// ================ 함수 정의 영역 ============//

// 1초마다 header가 자동으로 색이 변경되게하는 함수
let time = 0; // 시간을 나타내는 변수

function bling() {
  if (time === 0) {
    document.querySelector('.title1').style.color = '#d6806e';
    time++;
  } else if (time === 1) {
    document.querySelector('.title1').style.color = '#fbb666';
    time++;
  } else if (time === 2) {
    document.querySelector('.title1').style.color = '#f9f871';
    time++;
  } else { 
    document.querySelector('.title1').style.color = '#f2ecff';
    time = 0; // 무한 반복
  }
}



// 랜덤한 hole을 생성하는 함수
let $moleNumber; // 두더지 수
let preNum; // 이전 수
let randomNum; // 랜덤 수

function randomHole() {
  randomNum = Math.floor(Math.random() * 9) + 1; // 1 ~ 9
  if (preNum !== randomNum) { 
    preNum = randomNum;
    return randomNum;
  }
  // 이전에 있던 holeNum과 겹치면 다시 실행
  return randomHole();
}

// 랜덤으로 생성된 hole에서 두더지가 나오는 함수
function moleActive(holeNum) {
  holeNum.classList.add('active');
}

// 랜덤으로 생성된 hole에서 두더지가 사라지는 함수
function moleHide(holeNum) {
  holeNum.classList.remove('active');
}

// 두더지가 랜덤한 장소에서 등장하는 함수 (사용자 시도횟수 10번)
// 1. 시도횟수가 10회 미만이면
// 1-1. randomHole을 통해 random한 숫자 생성
// 1-2. 그 숫자를 moleActive의 파라미터로 넣음 (두더지가 올라옴)
// 1-3. 클릭시 두더지를 잡게되고 3초뒤에 새로운 두더지가 올라옴
// 1-4. count가 1회 늘어남

// 2. 시도횟수가 10회 이상이 되면
// 2-1. ending-box를 실행
// 2-2. START -> AGAIN??
let moleCatch = 0;

function showingMole () {
  if(turn < 10) {
    $moleNumber = document.getElementById(`${randomHole()}`);
    moleActive($moleNumber); // 랜덤위치에서 두더지 나옴
    $moleNumber.addEventListener('click', catchMole); // 클릭시 두더지 잡음
    moleCatch = setTimeout(seeMole, 3000); // 3초마다 두더지나오게
    turn++;
  } else {
    modalEvent(); // 엔딩
    $startBtn.addEventListener('click', startMole);
    $startBtn.textContent = 'AGAIN ???????';
    $startBtn.style.color = '#f2ecff';
  }
}

// 시작 버튼을 눌렀을 때 시작 버튼은 어둡게 변경되고
// 1초 뒤에 게임이 시작되는 함수
let $startBtn = document.querySelector('.start-btn');

let getPoint = 0;
let turn = 0;
function startMole() {
  $startBtn.removeAttribute('click', startMole);
  $startBtn.style.color = '#3d3f43';
  getPoint = 0; // 시작시 점수 초기화
  turn = 0; // 시작시 시도 횟수 초기화
  setTimeout(showingMole, 1000); // 1초 마다 showingMole함수 실행
}

// 두더지를 클릭하면 잡는 함수
let $count = document.querySelector('.count');
function seeMole() {
  // 두더지를 잡았다면 그 구멍에는 더 이상 클릭 이벤트가 없어야함
  $moleNumber.removeEventListener('click', catchMole);
  moleHide($moleNumber); // 잡았다면 두더지를 숨김
  clearTimeout(moleCatch); // 3초 제한시간 삭제
  setTimeout(showingMole, 1000); // 다시 1초뒤에 게임 시작
}
// 두더지 클릭해서 잡으면 점수가 올라가는 함수
function catchMole() {
  seeMole();
  clearTimeout(moleCatch);
  getPoint++; // 두더지 잡은 횟수 증가
  $count.innerHTML = getPoint; // 점수 업데이트
}



// ================ 함수 실행 영역 ============//
// 1초마다 bling함수 실행
setInterval(bling, 1000); 

// 시작버튼 누를 시 게임시작
$startBtn.addEventListener('click', startMole);
