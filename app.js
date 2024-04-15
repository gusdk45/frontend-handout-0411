// 이미지 슬라이드 요소들과 이전/다음 버튼 요소를 선택합니다.
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// 각 이미지 슬라이드의 초기 위치를 설정합니다.
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// 현재 이미지 슬라이드의 인덱스를 나타내는 변수를 초기화합니다.
let counter = 0;

// 다음 버튼 클릭 시 호출되는 이벤트 핸들러를 추가합니다.(carousel 함수 사용)
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

// 이전 버튼 클릭 시 호출되는 이벤트 핸들러를 추가합니다.(carousel 함수 사용)
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

// 이미지 슬라이드 및 버튼 상태를 업데이트하는 carousel 함수를 정의합니다.
function carousel() {
  // 다음 버튼 및 이전 버튼의 표시 여부를 결정하여 업데이트합니다.
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  
  // 이미지 슬라이드 이동
  const slideWidth = slides[0].getBoundingClientRect().width;
  const moveAmount = slideWidth * -counter;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${moveAmount}px)`;
  });
}

// 초기 상태에서는 이전 버튼을 숨깁니다.
prevBtn.style.display = "none";
