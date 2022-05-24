'use strict';
// js_showHide.js

const jsArea = document.querySelector('.js_area');


(function(){
  const jsBtn01 = jsArea.querySelector('.btn_01');
  const BtnDt = jsBtn01.querySelector('dt');
  // const BtnDd = jsBtn01.querySelector('dd');
  const BtnDd = BtnDt.nextElementSibling;
  //event
  //1. BtnDt를 이벤트처리(클릭) 시, BtnDd를 나타나게 만들기
  BtnDt.addEventListener('click', function(event){
    event.preventDefault();
    const ddStatus = window.getComputedStyle(BtnDd).display === 'none';
    
    if(ddStatus){
      BtnDd.style='display:block';
    } else{
      // BtnDd.removeAttribute('style');
      BtnDd.style = 'display:none';

    }
  });
})();

(function(){
  const jsBtn = jsArea.querySelector('.btn_02');
  const BtnDt = jsBtn.querySelector('dt');
  const BtnDd = jsBtn.querySelector('dd');
  let OpacityValue=0;
  let timed=100;
  let PERMISSION=true;
  // ========================================
  // 2. btnDt를 이벤트처리 시 BtnDd를 부드럽게 나타나고 사라지게 하기 (fadeIn,fadeOut)

  BtnDt.addEventListener('click',function(event){
    event.preventDefault();
    if(PERMISSION){
      PERMISSION=false;
      const ddStatus=window.getComputedStyle(BtnDd).display==='none';
      BtnDd.style.display='block';
      BtnDd.style.opacity = OpacityValue;

      if (ddStatus){
        let runningInterval= setInterval(function(){
          if (OpacityValue<=0) {
            OpacityValue+=1;
            BtnDd.style.opacity = OpacityValue;
          }else{
            clearInterval(runningInterval);
            PERMISSION = true;

          }
        },timed);
      } else{
        let runningInterval= setInterval(function(){
          if (OpacityValue>=1){
            OpacityValue -= 1;
            BtnDd.style.opacity = OpacityValue;
          } else {
            clearInterval(runningInterval);
            PERMISSION = true;
            BtnDd.style.opacity = 0;
            BtnDd.removeAttribute('style');
          }
        },timed); 
      }
    }
  }) //addevent


}) (); //function

//=================================================

(function(){
  // 변수영역--------------------------------------
  const jsBtn = jsArea.querySelector('.btn_03');
  const BtnDt = jsBtn.querySelector('dt');
  const BtnDd = jsBtn.querySelector('dd');
  let ddHeight = 0;
  let PERMISSION=true;
  // let finalddHeight = 200;
  let timed = 1;

  // 함수영역----------------------------------------
  const fnCheck= function(){
    PERMISSION = false;
    return window.getComputedStyle(BtnDd).display === 'none';
  }

  const fnblock=function(){
    BtnDd.style.display = 'block';
    BtnDd.style.height = ddHeight + 'px';
    BtnDd.style.overflow = 'hidden';
  }
  const fnSlideUp=function(){
    let runningInterval = setInterval(function () {
      if (ddHeight < finalddHeight) {
        ddHeight += 1;
        BtnDd.style.height = ddHeight + 'px';
      } else {
        ddHeight = finalddHeight;
        clearInterval(runningInterval);
        PERMISSION = true;
      }
    }, timed)
  }

  const fnSlideDown= function(){
    let runningInterval = setInterval(function () {
      if (0 < ddHeight) {
        ddHeight -= 1;
        BtnDd.style.height = ddHeight + 'px';
      } else {
        ddHeight = 0;
        clearInterval(runningInterval);
        BtnDd.removeAttribute('style');
        PERMISSION = true;

      }
    }, timed)
  }






  const fnGetHeigt=function(){
    BtnDd.style.display='block';
    const size=BtnDd.offsetHeight
    BtnDd.removeAttribute('style');
    return size;
  }

  // 추가변수-----------------------------------
  //btnDd 높이값
  const finalddHeight = fnGetHeigt();

  //이벤트 영역 btdDt를 클릭시 slidedown, slideUp-----------------
  BtnDt.addEventListener('click', function(event){
    event.preventDefault();
    if(PERMISSION){
    
    const ddStatus =fnCheck();
    fnblock();
    if (ddStatus){  
      fnSlideUp();
       //setinterval
    }else{
      fnSlideDown();
      //setinterval
    }
  }
}); //addevent

})();  //function