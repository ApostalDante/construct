let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.navbar__nav_button');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
console.log(menuBtn);
console.log(menu)