'use strict';
// a_06_js_grammer_03.js

let a = 1;
let b= a;
console.log(a, b);
  a=3;
console.log(a, b);

//------------------------------
let arr = [1,3,5];
let arr2 = arr;
console.log(arr, arr2);
  arr = [5,9,4]; //값(주소) 자체를 바꾸는 형식  
console.log(arr, arr2);

const brr= [2,5,7];
const brr2= brr;
console.log(brr, brr2);
  brr[0] = 9;
  brr[1] = 4;
  brr[5] = 0;
console.log(brr);
console.log(brr2); // 내부의 값을 변경했기 때문에 값을 공유

let obj = {apple:'red'};
let obj2 = obj;
console.log(obj, obj2);
  obj = {banana:'yello'};
console.log(obj, obj2);

const pbj = {grape:'pupple'};
const pbj2 = pbj;
console.log(pbj, pbj2);
pbj.grape = 'green';
pbj.bannana = 'green';
pbj.orange = 'orange';
console.log(pbj, pbj2);

//----------------------------

// console.clear();
let c=5;
let d=c; // 값 자체를 통으로 copy 가져오는변수 -> 깊은복사

const objGroup = [5,7,3];
const objG2 =objGroup;  //주소지만 가져오는 참조변수 -> 얕은복사
  objGroup[3]=5;
  console.log(objG2);

const objCopy=[];

for (let i = 0; i < objGroup.length; i+=1){
   objCopy[i] = objGroup[i];
}
console.log(objCopy);
objGroup[3]= 12;
objGroup[2]= 1;
console.log(objGroup,objCopy);

const copyG = [...objGroup];
objGroup[2]= 100;
console.log(objGroup,copyG);
//----------------------------
// console.clear();
const coffeMenu=['americano', 'cafe latte', 'cafe mocha', 'espresso', 'apogato', 'malcha latte'];
let coffeLen = coffeMenu.length;
for(let i= 0; i<coffeLen; i+=1) {
  console.log('menu:', coffeMenu[i]);
}
// for(let menu in coffeMenu) {
//   console.log(coffeMenu[menu], typeof menu);
// }

//매게변수: 실제 사용하는 기능을 변수로 임시매개체가 되는 형태
// 인수: 던져주는 곳, 인자: 받아서 사용하는 곳 
coffeMenu.forEach(function(data, index){ 
  console.log(data, index);
});

//-------------------------------
// console.clear();

const marker = {
  'nike':'shoose',
  'apple':'phone',
  'samsung':'laptop'
}

for(let title in marker) {
  console.log(marker[title]);
}

