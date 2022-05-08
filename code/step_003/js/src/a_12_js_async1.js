'use strict';
// a_12_js_async1.js

let num=0;
let timed=1000;
// 5초 뒤에 num 이라는 변수에 10을 더하기 * 1초->1000
setTimeout(()=>{
  num +=10;
  console.log('timeout:', num+=10);
}, timed*5);

num +=1;
console.log(num);
num +=2;
console.log(num);
num +=3;
console.log(num);
num +=4;
console.log(num);

//1초마다 num변수에 3씩 더하겠다
let setI= setInterval(()=>{
  console.log('interval:',num+=3)
  if(num>40){
    clearInterval(setI);
  }
}, timed);

num +=1;
console.log(num);
num +=2;
console.log(num);
num +=3;
console.log(num);
num +=4;
console.log(num);

//$.ajax({url:'/a.json', dataType"'json}).done(function(data){})
//ES5: new XMLhttpRequest()->open->send
//ES6: fetch(), promus(), async/await ->IE에서는 그냥 안됨, axios()

fetch('../js/data/mokaroo_01.json')
.then((response)=>{return response.json()})
.then((data)=>{
  return data.filter(function(arr,idx){
    return arr.first_name ==='Lacie';
  });
  return user1;
})
.then((data)=>{
  console.log(data);
})

/*
fetch('../js/data/mokaroo_01.json')
.then((response)=>{return response.json()})
.then((data)=>data.filrer(arr=>arr.first_name==='Lacie'))
.then(console.log)
*/





