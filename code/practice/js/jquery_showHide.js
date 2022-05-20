// jquery_showHide.js

(function($){
  const jqarea = $('.jquery_area');
  const btn_01 = jqarea.find('.btn_01');
  const btn_01Dt = btn_01.find('dt');
  const btn_01Dd = btn_01.find('dd');


  // const btn_01Dd = btn_01Dt.next('dd');
  let timed= 5000;

  // 1. btn_01Dt 클릭 시 btn_01Dd 가 나타나게/사라지게 만들기
  btn_01Dt.on('click',function(event){
    event.preventDefault();
    let i=0;
    let Ddheight= btn_01Dd.innerHeight();
    // console.log(btn_01Dd.innerHeight());

    let ddStatus = btn_01Dd.css('display') === 'none'
    // console.log(ddStatus);
    btn_01Dd.css({display:'block', opacity:i});

    if (ddStatus){
      let runInterval = setInterval(function () {
        btn_01Dd.css({ opacity: i += 0.1 });
        if (i >= 1) {
          clearInterval(runInterval);
        }
      }, timed / 1000); //setinterval
    } 
    else{
      
      let runInterval = setInterval(function(){
        i-=1;
        btn_01Dd.css({opacity: i});
        btn_01Dd.css({height:i+'px'});
        Ddheight
        if(i=0){
          clearInterval(runInterval);
          btn_01Dd.removeAttr('style');
        }
      },timed/1000);
    }

  });
// ------------------------------------------------

// 2. btn_01Dt 클릭 시 btn_01Dd 가 나타나게 만들기 (slideDown)

  const btn_02 = jqarea.find('.btn_02');
  const btn_02Dt = btn_02.find('dt');
  const btn_02Dd = btn_02.find('dd');
  let PERMISSION=true;

  btn_02Dt.on('click', function(event){
    if (PERMISSION) {
      PERMISSION=false;
    event.preventDefault();
    let i =0;
    let Ddheight = btn_02Dd.innerHeight();
    let ddStatus = btn_02Dd.css('display')==='none'
    btn_02Dd.css({display:'block',height:i, overflow:'hidden'});

    if (ddStatus){
      i=0;
      let runInterval = setInterval(function () {
        if (i < Ddheight) {
          i+=1;
          btn_02Dd.css({ height: i+ 'px' })

        } else {
          clearInterval(runInterval);
          PERMISSION = true;
        } // if setInterval (slideDown)
      }, timed / 1000); // function setInterval (slideDown)
  }else{
    i = Ddheight;
    let runInterval=setInterval(function(){
      if (i>0) {
        i-=1;
        btn_02Dd.css({ height: i + 'px' })

      } else {
        clearInterval(runInterval);
        btn_02Dd.removeAttr('style');
        PERMISSION = true;

      } // if setInterval(slideUp)

    }, timed / 1000); // function setInterval (slideUp)
    
  } // if ddStatus
  
    } //if(PERMISSION)


  }); //btn_02Dt.on('click')


})(jQuery);

