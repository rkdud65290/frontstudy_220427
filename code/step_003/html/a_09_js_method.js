// a_09_js_method.js
'use stict';

(function(){
  let arr=[1,4,5];
  arr[3]=10;
  arr.push('apple', 'kiwi'); // 배열 뒤에 데이터 넣기
  arr.push('bannana');

  arr.pop(); // 배열 뒤에 데이터 빼기(하나밖에 안됨)
  arr.pop();
  
  arr.shift(); // 배열 맨앞에 데이터 빼기
  arr.unshift(7); // 배열 맨앞에 데이터 넣기

  console.log(arr);

  // console.log(arr.length);
  // arr.forEach(function(d,i){console.log(d,i)});
  arr.splice(2,2);  //(순서, 갯수) -> 삭제 ex:(2,4) ->2번째부터 4개를 지워라
  console.log(arr); 
  const arr2=[...arr];

  let addr='서울시 마포구 연남동';
  const arrAdd=addr.split(' '); // ( ) 구분자를 이용하여 여러개의 문자열로 나눔
  console.log(arrAdd);
  let num='010-2244-7865';
  const arrNum= num.split('-');
  console.log(arrNum);
  let joinNum=arrNum.join(''); //배열의 모든 요소를 문자열로 합침
  console.log(joinNum);

 })();

