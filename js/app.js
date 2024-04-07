// ================ 변수 정의 영역 ============//

// flag 변수를 선언후 초기화
let flag1 = 0; 
let flag2 = 0; 

// ================ 함수 정의 영역 ============//

// 1초마다 header가 자동으로 색이 변경되게함
function bling1() {
  if (flag1 === 0) {
    document.querySelector('.title1').style.color = '#d6806e';
    flag1++;
  } else if (flag1 === 1) {
    document.querySelector('.title1').style.color = '#fbb666';
    flag1++;
  } else if (flag1 === 2) {
    document.querySelector('.title1').style.color = '#f9f871';
    flag1++;
  } else { 
    document.querySelector('.title1').style.color = '#f2ecff';
    flag1 = 0; // 무한 반복
  }
}

function bling2() {
  if (flag2 === 0) {
    document.querySelector('.title2').style.color = '#f2ecff';
    flag2++;
  } else if (flag2 === 1) {
    document.querySelector('.title2').style.color = '#d6806e';
    flag2++;
  } else if (flag2 === 2) {
    document.querySelector('.title2').style.color = '#fbb666';
    flag2++;
  } else { 
    document.querySelector('.title2').style.color = '#f9f871';
    flag2 = 0; // 무한 반복
  }
}


// ================ 함수 실행 영역 ============//
// 1초마다 bling함수 실행
setInterval(bling1, 1000); 
setInterval(bling2, 1000); 