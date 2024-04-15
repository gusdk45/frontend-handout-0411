// 이미지 슬라이드 요소들과 이전/다음 버튼 요소를 선택합니다.

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


// 각 이미지 슬라이드의 초기 위치를 설정합니다.
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`; // 각 이미지 슬라이드의 left 값을 index * 100%로 설정하여 가로로 나열
});

// 현재 이미지 슬라이드의 인덱스를 나타내는 변수를 초기화합니다.
let counter = 0;

// 다음 버튼 클릭 시 호출되는 이벤트 핸들러를 추가합니다.(carousel 함수 사용)

nextBtn.addEventListener("click", () => {
  carousel(1);
})

// 이전 버튼 클릭 시 호출되는 이벤트 핸들러를 추가합니다.(carousel 함수 사용)

prevBtn.addEventListener("click", () => {
  carousel(-1);
})

// 이미지 슬라이드 및 버튼 상태를 업데이트하는 carousel 함수를 정의합니다.
function carousel(direction) {

  counter += direction; // counter의 값을 증가

  // 다음 버튼 및 이전 버튼의 표시 여부를 결정하여 업데이트합니다.
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none"; // 마지막 슬라이드가 나오면 다음 버튼이 보이지 않도록 설정
  }
  if (counter > 0) { // 현재 슬라이드가 첫 번째 슬라이드가 아닌지 확인(슬라이드 인덱스가 0보다 큰지)
    prevBtn.style.display = "block";  // 두 번째 슬라이드라면, 이전버튼 표시 
  } else {
    prevBtn.style.display = "none";
  }
  
  // 이미지 슬라이드 이동
    if (counter === slides.length) { // 슬라이드 인덱스가 슬라이드 개수와 같으면
        counter = 0; // 슬라이드 인덱스를 초기화해서 처음으로 이동
    } else if (counter < 0) { // 슬라이드 인덱스가 0보다 작으면
        counter = slides.length - 1; // 슬라이드 인덱스를 마지막 슬라이드 끝으로 이동
    }

    slides.forEach(function (slide, index) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

}

// 초기 상태에서는 이전 버튼을 숨깁니다.
prevBtn.style.display = "none";
