'use strict';
// a_11_method2.js

const arr= ['bannana', 'orange', 'graph', 'kiwi', 'strawberry'];
const arrCopy=[...arr];
arrCopy.sort();
console.log(arr, arrCopy);
arrCopy.reverse();
console.log(arr, arrCopy);
console.clear();

const arrNum=[1,2,3,4,5,6,7,8,9,10,11,15,28,39,50];
arrNum.sort((a,b)=>{return a-b;});
// arrNum.sort((a,b)=> a-b);
console.log(arrNum);

// ----------------------------------------
// reduce: 배열의 내부 기능을 수행
const arrNum2=[1,3,5,8,10,22,55];
let totalNum=0;
for(let i=0; i<arrNum2.length; i+=1){
  totalNum+=arrNum2[i];
}
console.log(totalNum);

let totlaNum2=arrNum2.reduce((a,b)=>{return a+=b;});
// arrNum2.reduce({(a,b)=> a+=b });
console.log(totlaNum2);

// ---------------------------------------------
// filter: filer메소드는 내부함수의  return 에서 조건이 참인 경우만 허용
const filterNum=[];
for(let i=0; i<arrNum2.length; i+=1){
  if(arrNum2[i] > 5 && arrNum2[i]<30){
    filterNum.push(arrNum2[i])
  }
}

console.log(filterNum);

const filterArrNum=arrNum.filter(function(data,index){
  return 5 < data && data < 30;
});
// arrNum.filter((data)=>{return 5 < data && data < 30} );
console.log(filterArrNum);

// ------------------------------------------------
// map: 배열의 내용을 일괄 수행하는 기능
const upDataNum=[];
for(let i = 0; i<arrNum2.length; i+=1) {
  let sampleNum= arrNum2[i] ** 2;
  upDataNum.push(sampleNum);
} 
console.log(arrNum2,upDataNum);

arrNum2.forEach(function(data,index){
let sampleNum2= data**2;
})
// arrNum2.forEach((data,index)=>{ let sampleNum2= data**2});
console.log(arrNum2,upDataNum);

const setArrNum=arrNum2.map(function(data,index){
  return data**2;
});
// const setArrNum=arrNum2.map((data,index)=>{return data**2;});
console.log(setArrNum);

// reduce: [1,2,3,4,5,6] =>1+2+3+4+5+6 누적값
// map: [1,2,3,4,5,6]=> [1,4,9,16,25,36] 배열안의 요소들을 1:1 짝지음
// filter:[1,2,3,4,5,6] => [2,3,4]