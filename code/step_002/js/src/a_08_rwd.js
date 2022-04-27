// a_08_rwd.js

const menu = document.querySelector('.mobile_menu');
const gnbList = document.querySelector('.gnb > ul');


// 메뉴(버튼)을 클릭하면 gnbList 를 나타나게 해라!!
// 이벤트: 기본상태에서 무언가 변화가 처리되는 모든것

menu.addEventListener('click' ,function() {
  gnbList.style.display ='flex';
})

// menu.on('click' ,function(){
//   gnbList.classList({display:flex});
// });