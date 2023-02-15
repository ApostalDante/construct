document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 960) {
        let swiper = new Swiper('.image-slider', {
            //стрелки
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: '.swiper-button-prev',
            },
            //бесконечный слайдер
            loop: true,
            //скорость переключения слайдов
            speed: 1100,
        });
    } else {
        let swiper = null;
    }
})

let oldWidth = window.innerWidth;
window.onresize = function () {
    let newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        location.reload();
        oldWidth = newWidth;
    }
};



