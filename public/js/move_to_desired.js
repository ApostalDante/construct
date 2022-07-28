
const home = document.getElementById('home');
const contact = document.getElementById('contact');

document.querySelector("#btnHome").onclick = function () {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
};

document.querySelector("#btnAbout").onclick = schowMessage;

document.querySelector("#btnServiced").onclick = schowMessage;

document.querySelector("#btnWork").onclick = schowMessage;

document.querySelector("#btnContact").onclick = function () {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
};

function schowMessage() {
    alert('отсутствует макет, пока пусто');
};

document.querySelector("#footerLinkHome").onclick = function () {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
};

document.querySelector("#btnAPlan").onclick = schowMessage;
document.querySelector("#btnManage").onclick = schowMessage;
document.querySelector("#btnBuild").onclick = schowMessage;



