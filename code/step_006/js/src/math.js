//math.js
const box={};

  (function(){
    const fnSum = (a, b) => a + b;
    const fnMulti = (a, b) => a * b;
    function fnDiv(a, b) {
      return a / b;
    };

    box.fnDiv=fnDiv;
  })()
 
  console.log('sum:', fnSum(4,3));
