
'use strict';
//a_06_grammer_ex_card.js

// console.log(cardData);

// 1: .card내부의 ul에 li 요소 및 기타등등을 삽입

const elCard = document.querySelector('.card');
const elCardUl = elCard.querySelector('ul');
console.log(elCardUl);

const insertList = `<li>
< a href = "#" >
<div class="image">
</div>
<dl><dt>title_01</dt><dd>content Lorem ipsum dolor sit amet.</dd>
            </dl>
          </a >
        </li >`