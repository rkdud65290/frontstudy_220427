// b_01_responsive_handhelds.js

// b_01_responsive_js.js

//1 .navi_btn 내부 button요소를 클릭 시 -> 형제요소인 .navi_area를 .ation의 add/remove 처리
//children은 유사배열이기에 배열기능 사용할 수 없다.-> 진짜 배열로 전환하여 사용한다.
{
  //변수----------------------------------------------------------------
  // 기본 선택자
  const naviPart = document.querySelector('.navigation_part');
  const naviH2 = naviPart.querySelector('h2');
  const naviArea = document.querySelector('.navi_area');

  // 기본 기는처리
  const btnCode=`<button type="button"><i class="fa-solid fa-bars"></i><span>네비게이션 버튼</span></button>`;
  const MakeNaviBtn=document.createElement('div');
  MakeNaviBtn.setAttribute('class', 'navi_btn blind_area')
  MakeNaviBtn.innerHTML = btnCode;
  naviH2.after(MakeNaviBtn);

  // 추가 선택자
  const naviBtn = document.querySelector('.navi_btn');
  const naviBtnSel = [].slice.call(naviBtn.children)[0];
  const navibtnI = naviBtn.querySelector('i');
  const BTNICON = ['fa-bars', 'fa-xmark'];
  const naviDisplay=['flex', 'none'];


  // 이벤트-----------------------------------------
  naviBtnSel.addEventListener('click', function (e) {
    e.preventDefault();
    const check = window.getComputedStyle(naviArea).display === 'none';
    console.log(check);
    if (check) {
      naviArea.style.display = naviDisplay[0];
      navibtnI.classList.remove(BTNICON[0]);
      navibtnI.classList.add(BTNICON[1]);
    } else {
      naviArea.style.display = naviDisplay[1];
      navibtnI.classList.remove(BTNICON[1]);
      navibtnI.classList.add(BTNICON[0]);

    }
  })
}