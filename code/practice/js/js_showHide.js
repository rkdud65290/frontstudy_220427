'use strict';
// js_showHide.js

const jsArea = document.querySelector('.js_area');


(function(){
  const jsBtn01 = jsArea.querySelector('.btn_01');
  const BtnDt = jsBtn01.querySelector('dt');
  // const BtnDd = jsBtn01.querySelector('dd');
  const BtnDd = BtnDt.nextElementSibling;
  const ddStatus = window.getComputedStyle(BtnDd).display === 'none';
  console.log(ddStatus);
  //event
  //1. BtnDt를 이벤트처리(클릭) 시, BtnDd를 나타나게 만들기
  BtnDt.addEventListener('click', function(event){
    event.defaultPrevented();
   
  });




}());

