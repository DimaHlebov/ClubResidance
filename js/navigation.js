'use strict'
const arrowsArr = document.querySelectorAll('.v-arrows');

Array.from(arrowsArr).forEach((arrows, index) => {
    arrows.children[0].addEventListener('click', function(){
        if(index == 0){
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
                });
        }
        else{
            arrowsArr[index-1].scrollIntoView({behavior: "smooth", block: "end"});
        }
    });
    arrows.children[1].addEventListener('click', function(){
        if(index + 1 < arrowsArr.length){
            arrowsArr[index+1].scrollIntoView({behavior: "smooth", block: "end"});
        }
    });
});