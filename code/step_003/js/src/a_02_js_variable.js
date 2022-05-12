'use strict';
// a_02_js_variable.js

// document.write('무엇이든 나와라');
// document.write('<p>요소일것인가 글자일것인가?<p>');
// alert('massage');
console.log('나와랏');

var checkNumber= 1;
console.log(checkNumber);
var checkName='gayeong';
console.log(checkName);
var resultName=checkNumber+checkName;
console.log(resultName);
var likeNumber='10';
console.log(checkNumber+likeNumber); // 110

console.log(checkNumber-likeNumber); // -9 js 특징:자동 형변환 
console.log(checkName-likeNumber); 
// 문자라고 하더라도 어떠한 계산을 거치는 경우 실제 계산이 안되면 NaN(Not a Naumber)을 표출

var convertNumber = parseInt(checkNumber+'문자'+likeNumber); 
console.log(convertNumber);

checkNumber = 100;
console.log(checkNumber);

//----------------------------------------------
// btn을 이벤트발생 (클릭) 시 count내부에 숫자가 1씩 증가
var btn=document.querySelector('.btn');
var count=document.querySelector('.count');
var countNumber= 0;

btn.addEventListener('click', function(){
  countNumber = countNumber+1;
  count.innerText=countNumber;
})
// js는 
// 절차지향,기본은 동기화 처리이지만 비동기 방식을 같이 고수

//----------------------------------------------
var sample;
console.log(sample);
//--------------------------------------------------

//.date_list 내부에 날짜에 해당하는 요소를 삽입 (31개)


var dateList= document.querySelector('.date_list');
for(let i=1; i<=31; i=i+1 ){
  // let makeLi= document.createElement('li');
  // makeLi.innerHTML = insertList;
  // elUl.append(makeLi);
  // document.write('<li><button type="button">'+'i'+'일</button></li>');
  dateList.innerHTML='<li><button type="button">'+i+'일</button></li>';
  console.log('i:', i);
}

// 라면봉지를 생성->라면 내부에 무언가를 채우기->진열
// -----------------------------------
/* var 변수의 문제점
1. hoisting 현상이 일어나면서 var 변수선언은 상단에 초기화 처리된 것으로 인식
2. 한번 선언 후에는 다시 재선언을 하면 가능하다.
3. scope(영역) 제한에 다소 균형이 맞지 않는다.
*/ 
let user='xido';
console.log(user);
user='your';
console.log(user);
let k=1;
for(; k<=100; k=k+1) {
  console.log('k:', k);
}
console.log('k is outer for :', k);

const onlyOne=10;
console.log(onlyOne);

// var 이제는 사용x-> let,const 사용한다.
// 1. 'let' 호이스팅현상은 사라지지 않는다. 다만 초기화가 되지 않을뿐
// 2. 'let', 'const' 한번 선언한 변수는 재선언 불가능
// 3. 'let' 범위에 대한 설정이 더 민감해졌다.
// 4. 'const'는 선언과 동시에 값을 입력