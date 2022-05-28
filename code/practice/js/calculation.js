const wrap=document.querySelector('#wrap');
// console.log(wrap);
const cal= wrap.querySelector('#cal');
const display=cal.querySelector('.display');
const input=display.querySelector('.input');
const calculInput=display.querySelector('.calcul-input');
const clearAll=cal.querySelector('.ac');
const num=cal.querySelectorAll('.number');
// console.log(num);
const operator = cal.querySelectorAll('.operator');
// console.log(operator[1]);

//함수영역-----------------

function numberElem(e) {
  number = parseFloat(e.innerText);
  input.innerHTML += number;
}
// 이벤트영역------------------

num.forEach(function(el) {
  el.addEventListener('click', (event)=>{
    var number;
    if(input.innerHTML.startsWith("0")){
      if(event.target.innerHTML === '0') {
        return;
    }
    else {
        numberElem(el);
        input.innerHTML += number;
    }
    } else{
      numberElem(el);
            if(input.innerHTML.length > 25) {
                alert("25자리를 초과했습니다!")
                return input.innerHTML = "";
            }
    }
 
  });
  
  });

clearAll.addEventListener('click',()=>{
  input.innerHTML="";
  calculInput.innerHTML="";
})