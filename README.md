
# 두더지 잡기
![image](https://github.com/yocong/whack-a-mole/assets/86585468/5b645ec9-a869-473e-b0e2-310063944781)

---
 ## 제한시간안에 두더지를 잡는 게임<br>
 <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/><img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/><img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
---

## 🕹게임 방법  <br>
- 게임시작 버튼을 눌러서 게임을 시작한다.  
- 3초 안에 두더지를 잡는다. 
- 총 10번의 기회의 주어지고 1번 잡을 때마다 + 10점
---
## 🎯 기능 요구사항  
- 9개의 두더지 구멍이 나와야함
- 게임시작 버튼이 있어야함. 게임시작 버튼을 누를 시 글씨색 변경
- 게임이 시작되면 1초 후에 두더지가 구멍에서 랜덤하게 나와야 함
- 두더지가 나타난 곳을 클릭할 경우 두더지를 잡은 것으로 처리
- 두더지가 나타난 구멍을 3초 안에 클릭하지 않을 경우 두더지를 잡지 못한 것으로 처리
- 사용자가 두더지를 잡거나 제한 시간(3초)가 초과되었을 경우, 1초의 추가 간격을 두고 랜덤한 두더지 구멍에서 두더지가 나와야 함
- 다음 번에 두더지가 등장하는 구멍은 이전의 구멍가 반드시 다른 구멍이어야 함
- 사용자가 두더지를 잡을 수 있는 기회는 10번으로 제한
- 10번의 기회가 끝난 후 (잡은 두더지 숫자 /10) X 100 으로 계산하여 점수를 화면에 표기, 예) 100점
- 점수가 표기된 후, "START" 버튼 대신 "AGAIN" 버튼이 나타나야함
- "AGAIN" 버튼을 누를 경우, 다시 게임이 시작되어야 함
- "응모하기" 버튼을 클릭 시 응모하기 화면으로 넘어가게됨
---
## 🐞 Bug Report
1. 게임이 끝난 후에 엔딩 모달이 떠있는데 AGAIN 버튼을 눌렀을 때 엔딩 모달이 사라지지 않고 게임이 시작되는 문제

![image](https://github.com/yocong/whack-a-mole/assets/86585468/d3fd0d78-33b6-49e9-8d6d-8a949565c4e6)
```
function startMole() {
  hideModal(); // 추가
  $startBtn.removeAttribute('click', startMole);
  $startBtn.style.color = '#3d3f43';
  getMolePoint = 0; // 시작시 점수 초기화
  moleCatchTurn = 0; // 시작시 시도 횟수 초기화
  setTimeout(showingMole, 1000); // 1초 마다 showingMole함수 실행
}
```
- 게임 시작시 modal의 display:none; 처리로 해결
