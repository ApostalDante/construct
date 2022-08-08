let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider_next').addEventListener('click', function () {
    offset += 140;
    if (offset > 280) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_prev').addEventListener('click', function () {
    offset -= 140;
    if (offset < 0) {
        offset = 280;
    }
    sliderLine.style.left = -offset + 'px';
});