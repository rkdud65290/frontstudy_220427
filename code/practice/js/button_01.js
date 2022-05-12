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

// ------------------------------
const elDay = document.querySelector('.day');
const elUl = elDay.querySelector('ul');
console.log(elUl);
// console.log(insertList);
const insertList =function(n){
  return `<button type="button"> ${n}일</button>`;
}
const dateList = document.querySelector('.date_list');
for (let i = 1; i <= 31; i = i + 1) {
  let makeLi= document.createElement('li');
  makeLi.innerHTML = insertList(i);
  elUl.append(makeLi);
  // console.log('i:', i);
}

