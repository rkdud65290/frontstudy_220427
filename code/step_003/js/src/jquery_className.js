// jquery_className.js

(function($){

// console.log($.fn);


//wrap내부에 h1 생성, 그 내부에 a요소 삽입, href 속성은 './content.html', 내용은 'js-Don-basic'

const wrap= $('#wrap');
wrap.append('<h1></h1>');
const h1=wrap.find('h1');
h1.html('<a></a>');  
const h1Link= h1.find('a');
h1Link.attr( {"href":'./content.html'} ).text('js-Dom-basic');

//------------------------------------------------


const CLASSNAME1='one';
h1.addClass(CLASSNAME1);

h1.on('mouseenter', function(event){
  event.preventDefault();
  const hasTest= h1.hasClass(CLASSNAME1);
  if(hasTest){
    console.log('class이름 있음');
    h1.removeClass(CLASSNAME1);
  } else{
    console.log('class이름 없음');
    h1.addClass(CLASSNAME1);

    
  }


});



})(jQuery)


//addClass, hasClass, removeClass