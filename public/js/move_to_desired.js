
const home = document.getElementById('home');
const contact = document.getElementById('contact');

document.querySelector("#btnHome").onclick = function () {
    home.scrollIntoView(); // Прокрутка до верхней границы
    home.scrollIntoView(false); // Прокрутка до нижней границы
};

document.querySelector("#btnContact").onclick = function () {
    contact.scrollIntoView(false); // Прокрутка до верхней границы
    contact.scrollIntoView(); // Прокрутка до нижней границы
};


function hi() {
    alert('отсутствует макет, пока пусто');
};


function schowElement(element) {
    element.scrollIntoView(); // Прокрутка до верхней границы
    element.scrollIntoView(false);// Прокрутка до нижней границы
}

//document.querySelector("#btnContact").onclick = schowElement;
//document.querySelector("#btnHome").onclick = hi;
document.querySelector("#btnServiced").onclick = hi;
document.querySelector("#btnWork").onclick = hi;
document.querySelector("#btnAbout").onclick = hi;

