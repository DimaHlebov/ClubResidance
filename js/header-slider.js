'use strict'
const slider = document.querySelector('.slider');
const leftArrow = document.querySelectorAll('.left-header-arrow');
const rightArrow = document.querySelectorAll('.right-header-arrow');
const badges = document.querySelectorAll('.badges')

// Arrows
let sectionIndex = 0;
Array.from(rightArrow).forEach(arrow => {
    arrow.addEventListener('click', function(){
        if(sectionIndex < 1) sectionIndex += 1;
        else sectionIndex = 1;
        translate(sectionIndex);
    });
});
Array.from(leftArrow).forEach(arrow => {
    arrow.addEventListener('click', function(){
        if(sectionIndex > 0) sectionIndex -= 1;
        else sectionIndex = 0;
        translate(sectionIndex);
    });
});

// Badges
Array.from(badges).forEach(badges => {
    Array.from(badges.children).forEach((badge, index) => {
        badge.addEventListener('click', function(){
            sectionIndex = index;
            translate(sectionIndex);
        });
    });
});

function translate(sectionIndex){
    slider.style.transform = `translate(${sectionIndex * -50}%)`;
}