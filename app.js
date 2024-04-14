// 이미지 슬라이드 요소들과 이전/다음 버튼 요소를 선택합니다.
let slides = document.querySelectorAll('.slide'); //이미지 슬라이드 요소 선택
let prevButton = document.querySelector('.prevBtn'); // 이전 버튼 요소 선택
let nextButton = document.querySelector('.nextBtn');  // 다음 버튼 요소 선택

//이미지 슬라이드의 초기 위치를 설정합니다.
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// 현재 이미지 슬라이드의 인덱스를 나타내는 변수를 초기화합니다.
let counter = 0;

// 다음 버튼 클릭 시 호출되는 이벤트 핸들러를 추가합니다.(carousel 함수 사용)
nextButton.addEventListener('click', function() { 
  counter++;
  carousel();
});
// 이전 버튼 클릭 시 호출되는 이벤트 핸들러를 추가합니다.(carousel 함수 사용)
prevButton.addEventListener('click', function() {
  counter--;
  carousel();
});
// 이미지 슬라이드 및 버튼 상태를 업데이트하는 carousel 함수를 정의합니다.
function carousel() {
  // 다음 버튼 및 이전 버튼의 표시 여부를 결정하여 업데이트합니다.
  if (counter < slides.length - 1) {
    nextButton.style.display = 'block'; //현재 이미지 슬라이드 인덱스가 전체 슬라이드 수보다 작으면 다음 버튼을 표시함
  } else {
    nextButton.style.display = 'none'; //그렇지 않으면 숨김
  }

  if (counter > 0) {
    prevButton.style.display = 'block'; //현재 이미지 슬라이드가 첫번째 페이지가 아니면 이전 버튼을 표시함
  } else {
    prevButton.style.display = 'none'; //그렇지 않으면 숨김
  }
  
  // 이미지 슬라이드 이동
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// 초기 상태에서는 이전 버튼을 숨깁니다.
prevButton.style.display = 'none'; 
