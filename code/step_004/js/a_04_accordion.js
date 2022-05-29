// a_04_accordion.js

/**
 * //시나리오:아코디언 메뉴를 형성
 * 1. dd(button)클릭시 , 뒤에 오는 dd 를 나타나게 만들자!
 * 2. dt를 클릭시 dd가 나타나는데 다른 dl에 있는 dd는 사라지게 만들자!(선택 순번/ 다른 순번을 체크 idx)
 * 3. dd를 나타나게 만들때 animation을 적용해주세요.(펼폈을 경우의 높이값이 필요.:0값-> 적용 높이값까지 움직임)
 * 4.  dd를 나타나게 만들때 다른 dd에서도 animation을 적용하여 사라지게 만들기.
 * 5. dt를 클릭시 이미 펼쳐져 있는 dd라면 amimation을 이용하여 사라지게 만들기
 * 6.구글시트에서 json형식으로 변환하여 값 처리/ 변경
 * (`http://gsx2json.com/api?id=${구글시트 ID명}&sheet=${구글시트 이름}`)
 * 6.1 구글시트 가져올 조건-공유처리되어있어야, 시트이름 영문
 * 6-2:id명은 주소창에 'd/'이후부터 '/edit' 이전까지
 * 
 * 
 */


//변수--------------------------------
const SHEET={id:'1nJLOUbDflV9aSexKX_liZa_m1h4fMEYKzigPrWN5SPQ', name:'accordion'};
const JSONURL=`http://gsx2json.com/api?id=${SHEET.id}&sheet=${SHEET.name}`;


const wrap=document.querySelector('#wrap');
const headBox=wrap.querySelector('#headBox');
const contentBox=headBox.querySelector('#contentBox');
const elAccorArea=contentBox.querySelector('.accordion_area');
let elAccorDl; //elAccorArea.querySelectorAll('dl');
const ACTION='action';
let checkHeight=[];
let timed=500;



// 함수-------------------------
const ACCORDIONCODE= function(number, title, content ){
  return `<dl>
  <dt><button type="button"><span>${number+1}</span>. <span>${title}</span><i class="fa-solid fa-arrow-down"></i></button>
  </dt>
  <dd><div class="content">${content}</div></dd></dl>`
};

const fnDdHeightCheck=function(){
  elAccorDl.forEach((el,idx)=>{
    const dd=el.querySelector('dd');
    dd.style.display='block';
    setTimeout(()=>{
      checkHeight.push(dd.clientHeight);
      dd.removeAttribute('style');
    },0);
  }) 
}

const fnSlideDown=function(el,n){
  const elDd=el.querySelector('dd');
  elDd.style=`height:0; overflow:hidden; transition:height ${timed}ms ease`;
  setTimeout(() => {
    elDd.style.height=checkHeight[n]+'px';
    // console.log(checkHeight[n]);
  }, 0);
};

const fnSlideUp=function(el,n){
  const elDd=el.querySelector('dd');
  elDd.style.height=0;
  setTimeout(()=>{
    el.classList.remove(ACTION);
    elDd.removeAttribute('style');
  },timed);

}


const fnRemoveAction= function(n){
  elAccorDl.forEach((el,idx)=>{
    if(n===idx){
      el.classList.add(ACTION);
      fnSlideDown(el, idx);
      // console.log(el.clientHeight);
    }else{
      fnSlideUp(el,idx);
      // el.classList.remove(ACTION);
    }
  });
}





//test:fetch는 비동기 처리이기 때문에 필요한 data를 불러온 이후에 기능을 수행하도록 처리
fetch(JSONURL)
.then(data=>data.json())
.then(data=> data.rows)
.then(jsonData=>{
  const accordionData=jsonData;
  accordionData.forEach((data,index)=>{
    elAccorArea.insertAdjacentHTML('beforeend', ACCORDIONCODE(index, data.title, data.content));
  })
  
})
.catch(console.log);

//기능수행----------------------
elAccorDl=elAccorArea.querySelectorAll('dl');
fnDdHeightCheck();

//이벤트 수행-------------------------
//dt클릭시 아코디언 수행

elAccorDl.forEach((el, idx)=>{
  let elDt=el.querySelector('dt');
  // console.log(elDt);
  elDt.addEventListener('click',function(e){
    e.preventDefault();
    const check=el.classList.contains(ACTION);
    (check) ? fnSlideUp(el)  :  fnRemoveAction(idx);
  });
})

// function addClassName(){
//   elAccorDl[0].classList.add('action');
// }
// addClassName();