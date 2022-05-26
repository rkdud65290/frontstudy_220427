const wrap=document.querySelector('#wrap');
// console.log(wrap);
const cal= wrap.querySelector('#cal');
const num=cal.querySelectorAll('.number');
// console.log(num);
const operator = cal.querySelectorAll('.operator');
// console.log(operator[1]);

const rhq= function(){
  return num*num;
}
console.log(rhq);