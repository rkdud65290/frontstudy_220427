'use stict';
let btn=document.querySelector('.btn');
let count=document.querySelector('.count');
let setCount=0;

// button 에 이벤트가 발생할때마다 1씩 증가

btn.addEventListener('click',function(){
  setCount+=1;
  // console.log(setCount);
  count.innerText=setCount;
})