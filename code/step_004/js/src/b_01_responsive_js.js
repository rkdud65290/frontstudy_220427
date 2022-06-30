// b_01_responsive_js.js

{

  //변수----------------------------------------
  const dataFile={handhelds:'../js/src/b_01_responsive_handhelds.js'};
  const body=document.querySelector('body');
  const naviArea = document.querySelector('.navi_area');

  const desktopWidth=1440;
  const widthCheck= window.matchMedia(`(max-width:${desktopWidth - 1}px)`);

  let handHelds;

  // function-------------------------------------
  const fnHandHeldsScript= function(){
    const makeScript = document.createElement('script');
    makeScript.setAttribute('src', dataFile.handhelds);
    makeScript.classList.add('handHelds');
    body.append(makeScript);
    handHelds = document.querySelector('.handHelds');
  };

  const fnHandHeldsRemove=function(){
    const naviBtn = document.querySelector('.navi_btn');
    handHelds.remove();
    naviArea.removeAttribute('style');
    naviBtn.remove();
  };

  // event기능-------------
  if (widthCheck.matches){fnHandHeldsScript();}

  widthCheck.addEventListener('change',(e)=>{
   (e.matches) ? fnHandHeldsScript() : fnHandHeldsRemove();
  });
}

// phone : tablet : laptop : desktop 