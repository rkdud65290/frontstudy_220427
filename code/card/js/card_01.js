'use strict';

const elCard=document.querySelector('.card');
const elCardUl = elCard.querySelector('ul');

const insertList =`
          <a href="#">
           <div class="image"></div>
           <dl>
             <dt>title_01</dt>
             <dd>Lorem ipsum dolor sit amet.</dd>
           </dl>
         </a>
        `

// console.log(ImgPath);
let cardLen = cardData.length;
for (let i = 0; i < cardLen; i+=1){
  let makeLi = document.createElement('li');
  makeLi.innerHTML = insertList;

  let elLiDt = makeLi.querySelector('dt');
  let elLiDd = makeLi.querySelector('dd');
  let elLiA=makeLi.querySelector('a');
  let elLiImage=makeLi.querySelector('.image');
  let ImgPath = cardData[i].url + cardData[i].image;
  elLiDt.innerText = cardData[i].title;
  elLiDd.innerText = cardData[i].content;
  elLiA.href = cardData[i].href;
  elLiImage.style.backgroundImage = `url(${ImgPath
})`;
  elCardUl.append(makeLi);
}

