'use strict';
// fadein, fadeout

  const js_area=document.querySelector('.js_area');
  const jsBtn=js_area.querySelector('.btn_02');
  const BtbDt=jsBtn.querySelector('dt');
  const BtnDd=jsBtn.querySelector('dd');
  let opacityValue=0;
  let timed=100;

BtbDt.addEventListner('click', function(event){
event.preventDefault();
const DdDisplay=getComputedStyle(BtnDd).display==='none';
if(DdDisplay){
  BtnDd.style.display='block';
  BtnDd.style.opacity=opacityValue;

  let runningInterval= setInterval(function(){
    if(opacityValue<1){
      opacityValue+=1;
      BtnDd.style.opacity=opacityValue;
      console.log(opacityValue);
    }else{
        clearInterval(runningInterval);
        }
      }, timed/50);

} else{
  opacityValue=0;
  BtnDd.removeAttribute('style');
  }
});





