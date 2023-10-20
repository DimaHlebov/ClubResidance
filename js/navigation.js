'use strict'
const arrowsArr = document.querySelectorAll('.v-arrows');
const bulletsArr = document.querySelectorAll('.bullet');

Array.from(arrowsArr).forEach((arrows, index) => {
    arrows.children[0].addEventListener('click', function () {
        if (index == 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        else {
            arrowsArr[index - 1].scrollIntoView({ behavior: "smooth", block: "end" });
        }
    });
    arrows.children[1].addEventListener('click', function () {
        if (index + 1 < arrowsArr.length) {
            arrowsArr[index + 1].scrollIntoView({ behavior: "smooth", block: "end" });
        }
    });
});

const documentHeight = document.documentElement.scrollHeight

Array.from(bulletsArr).forEach((bullet, index) => {
    if (index === 0 || index % 5 == 0) {
        bullet.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }
    if (index !== 0 && index % 5 !== 0) {
        const arrowIndex = index % 5
        bullet.addEventListener('click', function () {
            arrowsArr[arrowIndex - 1].scrollIntoView({ behavior: "smooth", block: "end" });
        });

    }

});

