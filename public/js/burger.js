let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
console.log(menuBtn);
console.log(menu)