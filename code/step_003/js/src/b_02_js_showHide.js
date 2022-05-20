'use strict';
// js_showHide.js

const jsArea = document.querySelector('.js_area');
(function(){
  const jsBtn01 = jsArea.querySelector('.btn_01');
  const BtnDt = jsBtn01.querySelector('dt');
  // const BtnDd = jsBtn01.querySelector('dd');
  const Btn01Dd = BtnDt.nextElementSibling;

  //event
  //1. BtnDt를 이벤트처리(클릭) 시, BtnDd를 나타나게 만들기

  BtnDt.addEventListener('click', function (event) {
    event.preventDefault();
    // Btn01Dd.css(); jQuery
    const ddDisplay = window.getComputedStyle(Btn01Dd).display === 'none';

    if (ddDisplay) {
      Btn01Dd.style = 'display:block';
    } else {
      Btn01Dd.removeAttribute('style');
      // Btn01Dd.style = 'display:block';
      // Btn01Dd.removeAttr('style'); jQuery
    }
  });
})();

//================================================
//fsdeIn, fadeOut
(function(){
  //BtnDt를 이벤트발생(클릭)시, dd 를 부드럽게 fade처리로 나타나게/사라지게 만들기

  // 변수 영역----------------------------------------
  const jsBtn = jsArea.querySelector('.btn_02');
  const BtnDt= jsBtn.querySelector('dt');
  const BtnDd= jsBtn.querySelector('dd');
  let opacityVAlue=0;
  let timed=100;
  let PERMISSION=true;

  // 이벤트 영역--------------------------------------
  BtnDt.addEventListener('click', function(event){
    event.preventDefault();
    if (PERMISSION){
      PERMISSION=false;
    
    const DdDisplay = window.getComputedStyle(BtnDd).display==='none';
    if(DdDisplay){
      BtnDd.style.display='block';
      BtnDd.style.opacity = opacityVAlue / 100;
      let runningInterval= setInterval(function(){
        if (opacityVAlue < 100){
          opacityVAlue += 1;
          BtnDd.style.opacity = opacityVAlue / 100;
        }else{
          clearInterval(runningInterval);
          PERMISSION = true;

        }
      }, timed / 50);
    }else{
      let runningInterval=setInterval(function(){
        if(opacityVAlue>0){
          opacityVAlue -= 1;
          BtnDd.style.opacity = opacityVAlue / 100;
        }else {
          clearInterval(runningInterval);
          PERMISSION = true;
          opacityVAlue=0;
          BtnDd.removeAttribute('style');
        }
      }, timed / 50);
    };  
    } //PERMISSIOMN
  }); // BtnDt.addEventListener('click')
  
})(); //function()

//================================================
//slideDown, slideUp
(function(){
  const jsBtn = jsArea.querySelector('.btn_03');
  const BtnDt = jsBtn.querySelector('dt');
  const BtnDd = jsBtn.querySelector('dd');
  // const ddFinalHeight=200;
  let PERMISSION = true;
  let timed = 100;
  let ddHeight=0;
  let runningInterval;
  // console.log(BtnDd.clientHeight);

//함수영역----------------------------------

const fnCheck=function(){
  PERMISSION = false;
  return window.getComputedStyle(BtnDd).display === 'none';
};

// btnDd 나타날경우
const fnBlockdd=function(){
  BtnDd.style.display = 'block';
  BtnDd.style.height = ddHeight + 'px';
  BtnDd.style.overflow = 'hidden';
};

  const fnSlideDown= function(){
    runningInterval = setInterval(() => {
      if (ddFinalHeight > ddHeight) {
        ddHeight += 1;
        BtnDd.style.height = ddHeight + 'px';
      } else {
        ddHeight = ddFinalHeight; //안써도됨
        clearInterval(runningInterval);
        PERMISSION = true;
      }
    }, timed / 100);
  };

  const fnSlideUp= function(){
    runningInterval = setInterval(() => {
      if (ddHeight > 0) {
        ddHeight -= 1;
        BtnDd.style.height = ddHeight + 'px';
      } else {
        ddHeight = 0;
        BtnDd.removeAttribute('style');
        clearInterval(runningInterval);
        PERMISSION = true;
      }
    }, timed / 100);
  };

  // 선택자.innerHeight(); ->jQuery에서 높이값 가져오기 기능을 구현
  const fnGetHeight = function () {
    BtnDd.style.display = 'block';
    const size = BtnDd.offsetHeight;
    BtnDd.removeAttribute('style');
    return size;
  };  

  // 추가변수--------------------------------
  const ddFinalHeight= fnGetHeight();


  //이벤트 수행-------------------------------------
  //BtnDt를 이벤트발생(클릭)시, dd 를 부드럽게 slide처리로 나타나게/사라지게 만들기

  BtnDt.addEventListener('click',function(event){
    event.preventDefault();
    if(PERMISSION){
      const displayEl=fnCheck();
    if(displayEl){
      fnBlockdd();
      fnSlideDown();
    }else{
      fnSlideUp();
    }
    } //if(permission)

  }); //addEventListner('click')

})();






//================================================
// html 문서의 인라인속성값을 가져올때 사용
// console.log(Btn01Dd.style.display); 

//css문서에서 작성한 속성값을 가져올때 사용
// consolr.log(window.getComputedStyle(Btn01Dd).display);

//

// const wrap=document.querySelector('#wrap');
// console.log(wrap.clientHeight); 보더제외 높이값
// console.log(wrap.offsetHeight);  보더포함 높이값